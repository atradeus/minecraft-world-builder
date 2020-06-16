import '@mdi/font/css/materialdesignicons.css'
import 'typeface-roboto/index.css';
import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import VueCookies from 'vue-cookies'
// import './plugins/axios'

Vue.use(VueCookies)

import axios from 'axios'
import {AxiosStatic} from 'axios';

Vue.prototype.$axios = axios;

declare module 'vue/types/vue' {
  interface Vue {
    $axios: AxiosStatic;
  }
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
