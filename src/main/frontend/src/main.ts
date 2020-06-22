import '@mdi/font/css/materialdesignicons.css'
import 'typeface-roboto/index.css';
import Vue from 'vue'
import App from './App.vue'
//import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import VueCookies from 'vue-cookies'
import axios from 'axios'
import {AxiosStatic} from 'axios';

const amplitude = require('amplitude-js');
amplitude.getInstance().init('00d3b022e5b8bc47188370acbd4f4acc');
amplitude.getInstance().logEvent('App Loaded');

Vue.prototype.$amplitude = amplitude;
Vue.prototype.$axios = axios;

declare module 'vue/types/vue' {
  interface Vue {
    $axios: AxiosStatic;
    $amplitude: any;
  }
}

Vue.use(VueCookies)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
