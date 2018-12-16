import Vue from 'vue';
import Vuex from 'vuex';
import fetchScore from '@/api/score';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    BASE_API: 'https://api.youthol.cn',
    currentUser: {
      // username: '15110302127',
      // password: 's9wmu102'
      // username: '15110302130',
      // password: '742682076waw',
      // username: '15110302122',
      // password: 'lzw15166931292',
      // username: '15110302131',
      // password: 'wicc1369050739'
    },
    allscore: []
  },
  getters: {
    isLogin: state => {
      return !!(state.currentUser.username && state.currentUser.password);
    },
    userinfo: state => {
      if (state.allscore.length) {
        return {
          xh: state.allscore[0].xh,
          xm: state.allscore[0].xm,
          bj: state.allscore[0].bj
        };
      }
    },
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
      let kch = [];
      let course = [];
      getters.majorCourse
        .filter(el => el.cj !== '缓考')
        .forEach(item => {
          if (kch.includes(item.kch)) {
            const key = kch.indexOf(item.kch);
            if (course[key].bfzcj < item.bfzcj) {
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
      return getters.filterMajorCourse.filter(el => el.bfzcj < 60).length;
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
    setCurrentUser({ commit }, payload = {}) {
      const { username, password } = payload;
      commit('setCurrentUser', { username, password });
    },
    async getUserScore({ commit }, payload) {
      const params = {
        user: payload.username,
        passwd: payload.password,
        isauth: 0
      };
      const response = await fetchScore.list(params);
      // TODO: 完善返回结果验证
      let data = [];
      response.data.forEach(el => {
        if (el.items && el.items.length) {
          data = [...data, ...el.items];
        }
      });
      commit('setScoreList', data);
    }
  }
});
