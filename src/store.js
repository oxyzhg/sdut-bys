import Vue from 'vue';
import Vuex from 'vuex';
import fetchScore from '@/api/score';
import router from './router';
import Toast from 'muse-ui-toast';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    BASE_API: 'https://youthapi.sdut.edu.cn',
    currentUser: {},
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
      const { username, password } = payload;
      const params = {
        user: payload.username,
        passwd: payload.password,
        isauth: 0
      };
      const response = await fetchScore.list(params);
      if (response.data === -1) {
        Toast.error('密码不正确！');
      } else {
        commit('setCurrentUser', { username, password });
        commit('setScoreList', response.data.items);
        Toast.success('登录成功！');
        router.push('/gpa');
      }
    }
  }
});
