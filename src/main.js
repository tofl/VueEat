import Vue from 'vue';
import vuetify from '@/plugins/vuetify';
import axios from 'axios';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.prototype.$api = axios.create({
  baseURL: process.env.VUE_APP_YELP_API_ROOT,
  headers: {
    Authorization: `Bearer ${process.env.VUE_APP_YELP_API_AUTH_TOKEN}`,
  },
});

new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
