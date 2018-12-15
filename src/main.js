import Vue from 'vue';
import Axios from 'axios';
import App from './App.vue';
import router from './router';
import store from './store';
import MuseUI from 'muse-ui';
import Loading from 'muse-ui-loading';
import 'typeface-roboto';
import 'muse-ui/dist/muse-ui.css';
import 'muse-ui-loading/dist/muse-ui-loading.css';

Vue.use(MuseUI);
Vue.use(Loading);

Vue.prototype.$axios = Axios;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
