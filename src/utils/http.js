import axios from 'axios';

const errorHandle = (status, message) => {
  switch (status) {
    case 400:
      console.log('错误请求');
      break;
    case 401:
      console.log('未授权，请重新登录');
      break;
    case 403:
      console.log('拒绝访问');
      break;
    case 404:
      console.log('请求错误，未找到该资源');
      break;
    case 405:
      console.log('请求方法未允许');
      break;
    case 408:
      console.log('请求超时');
      break;
    case 500:
      console.log('服务端错误');
      break;
    case 501:
      console.log('网络未实现');
      break;
    case 502:
      console.log('网络错误');
      break;
    case 503:
      console.log('服务不可用');
      break;
    case 504:
      console.log('网络超时');
      break;
    case 505:
      console.log('HTTP版本不支持该请求');
      break;
    default:
      console.log(`ERROR:${message}`);
  }
};

const instance = axios.create();

instance.defaults.baseURL = 'https://youthapi.sdut.edu.cn';
instance.defaults.timeout = 3000;
instance.defaults.withCredentials = true;
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

instance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  error => Promise.reject(error)
);

instance.interceptors.response.use(
  response => response,
  error => {
    const { response } = error;
    if (response) {
      errorHandle(response.status, response.statusText);
      return Promise.reject(response);
    } else {
      console.log('连接到服务器失败');
    }
  }
);

export default instance;
