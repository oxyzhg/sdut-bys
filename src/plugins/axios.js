import axios from 'axios';

axios.defaults.baseURL = '';

const token = localStorage.getItem('token');

if (token) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

axios.interceptors.request.use(config => config, error => Promise.reject(error));
axios.interceptors.response.use(response => response, error => Promise.reject(error));
