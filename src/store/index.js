import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const $api = axios.create({
  baseURL: process.env.VUE_APP_YELP_API_ROOT,
  headers: {
    Authorization: `Bearer ${process.env.VUE_APP_YELP_API_AUTH_TOKEN}`,
  },
});

export default new Vuex.Store({
  state: {
    restaurants: null,
  },
  mutations: {
    setRestaurants(state, restaurants) {
      state.restaurants = restaurants;
    },
  },
  actions: {
    searchRestaurants({ commit }) {
      $api.get('/businesses/search?location=Lyon&categories=restaurants')
        .then(({ data }) => {
          commit('setRestaurants', data.businesses);
        });
    },
  },
  modules: {
  },
});
