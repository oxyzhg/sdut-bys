import Vue from 'vue';
import Axios from 'axios';
import App from './App.vue';
import router from './router';
import store from './store';
import MuseUI from 'muse-ui';
import 'typeface-roboto';
import 'muse-ui/dist/muse-ui.css';

Vue.use(MuseUI);

Vue.prototype.$axios = Axios;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
