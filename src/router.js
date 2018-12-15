import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import ScoreGpa from './views/ScoreGpa.vue';
import ScoreList from './views/ScoreList.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/gpa',
      name: 'gpa',
      meta: {
        title: '平均学分绩点'
      },
      component: ScoreGpa
    },
    {
      path: '/score',
      name: 'score',
      meta: {
        title: '成绩表'
      },
      component: ScoreList
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Home.vue')
    }
  ]
});
