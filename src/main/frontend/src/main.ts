import '@mdi/font/css/materialdesignicons.css'
import 'typeface-roboto/index.css';
import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import VueCookies from 'vue-cookies'

// export default {
//   install: (Vue, {apiKey, userId, config}) => {
//     amplitude.getInstance().init(apiKey, userId, config);
//
//     // eslint-disable-next-line
//     Vue.prototype.$amplitude = amplitude;
//   },
// };
// import './plugins/axios'

Vue.use(VueCookies)

import axios from 'axios'
import {AxiosStatic} from 'axios';

Vue.prototype.$axios = axios;

const amplitude = require('amplitude-js');
amplitude.getInstance().init('00d3b022e5b8bc47188370acbd4f4acc'); // apiKey, userId, config
amplitude.getInstance().logEvent('main');
Vue.prototype.$amplitude = amplitude;

declare module 'vue/types/vue' {
  interface Vue {
    $axios: AxiosStatic;
    $amplitude: any;
  }
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created() {
    // Prevent blank screen
    this.$router.push('/')
  }
}).$mount('#app')
