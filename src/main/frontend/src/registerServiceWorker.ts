/* eslint-disable no-console */

import {register} from 'register-service-worker'
import axios from 'axios'
import VueCookies from 'vue-cookies'

//if (process.env.NODE_ENV === 'production') {
register(`${process.env.BASE_URL}service-worker.js`, {
  ready() {
    axios.get('/api/version')
      .then((response) => {
        if (response.data) {
          const gitInfo = response.data;


          const version = localStorage.getItem('version');
          if (version != gitInfo.commitId) {
            console.log("New version: " + gitInfo.commitId);
            localStorage.setItem('version', gitInfo.commitId);
            //window.location.reload();
          } else {
            console.log(
              'App is being served from cache by a service worker.\n' +
              'For more details, visit https://goo.gl/AFskqB\n' +
              `version: ${version}`
            );
          }
        }
      })
      .catch(error => {
        console.error(error);
      });
  },
  registered() {
    console.log('Service worker has been registered.');
  },
  cached() {
    console.log('Content has been cached for offline use.');
  },
  updatefound() {
    console.log('New content is downloading.');
  },
  updated() {
    console.log('New content is available; please refresh.');
    //window.location.reload();
  },
  offline() {
    console.log('No internet connection found. App is running in offline mode.');
  },
  error(error) {
    console.error('Error during service worker registration:', error);
  }
})
// }

