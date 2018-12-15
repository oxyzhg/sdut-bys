import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import qs from 'qs';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    BASE_API: 'https://api.youthol.cn',
    currentUser: {
      // username: '15110302127',
      // password: 's9wmu102',
      // username: '15110302130',
      // password: '742682076waw',
      // username: '15110302129',
      // password: 'wodengni0202AI',
      // username: '15110302122',
      // password: 'lzw15166931292',
      // username: '15110302141',
      // password: 'j12345',
      username: '15110302131',
      password: 'wicc1369050739',
      // username: '15110302124',
      // password: 'memory0825'
    },
    allscore: []
  },
  getters: {
    scoreList: state => {
      return state.allscore.filter(el => el.kcbj === '主修');
    },
    majorCourse: (state, getters) => {
      return getters.scoreList.filter(el => el.kcxzdm !== '03');
    },
    optionCourse: (state, getters) => {
      return getters.scoreList.filter(el => el.kcxzdm === '03' && el.bfzcj >= '60');
    },
    filterMajorCourse: (state, getters) => {
      let kch = []; // 课程编号数组
      let course = []; // 课程详细数据数组
      // 缓考、补考、重修，同一课程取最高成绩
      getters.majorCourse
        .filter(el => el.cj !== '缓考')
        .forEach(item => {
          if (kch.includes(item.kch)) {
            const key = kch.indexOf(item.kch);
            if (course[key].cj < item.cj) {
              course.splice(key, 1, item);
            }
          } else {
            kch.push(item.kch);
            course.push(item);
          }
        });
      return course;
    },
    averageGPA: (state, getters) => {
      const total_cj = getters.filterMajorCourse.reduce(
        (prev, cur) => prev + (Number(cur.cj) ? Number(cur.cj) : cur.bfzcj) * Number(cur.xf),
        0
      );
      const total_xf = getters.filterMajorCourse.reduce((prev, cur) => prev + Number(cur.xf), 0);
      return total_xf ? (total_cj / total_xf).toFixed(3) : 0;
    },
    totalOptionXf: (state, getters) => {
      return getters.optionCourse.reduce((prev, cur) => prev + Number(cur.xf), 0);
    },
    totalCourse: (state, getters) => {
      return getters.filterMajorCourse.length;
    },
    failCourse: (state, getters) => {
      return getters.majorCourse.filter(el => el.bfzcj < 60).length;
    }
  },
  mutations: {
    setCurrentUser(state, payload) {
      state.currentUser = payload;
    },
    setScoreList(state, payload) {
      state.allscore = payload;
    }
  },
  actions: {
    setCurrentUser({ commit }, payload) {
      commit('setCurrentUser', {
        username: payload.username,
        password: payload.password
      });
    },
    getUserScore({ commit, state }) {
      const { BASE_API, currentUser } = state;
      const params = qs.stringify({
        user: currentUser.username,
        passwd: currentUser.password,
        isauth: 0
      });
      axios
        .post(`${BASE_API}/getkb/allscore`, params)
        .then(res => {
          let data = [];
          res.data.forEach(el => {
            if (el.items && el.items.length) {
              data = [...data, ...el.items];
            }
          });
          // console.log(data)
          commit('setScoreList', data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
});
