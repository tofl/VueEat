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
    currentRestaurant: null,
  },
  mutations: {
    setRestaurants(state, restaurants) {
      state.restaurants = restaurants;
    },

    setCurrentRestaurant(state, currentRestaurant) {
      state.currentRestaurant = currentRestaurant;
    },
  },
  actions: {
    searchRestaurants({ commit }, parameters) {
      const urlParameters = {
        restaurantName: null,
        openNow: false,
        categories: 'restaurants',
      };

      if (parameters) {
        Object.keys(parameters).forEach((index) => {
          urlParameters[index] = parameters[index];
        });
      }

      let queryString = '';
      if (urlParameters.restaurantName) {
        queryString += `&term=${urlParameters.restaurantName}`;
      }
      queryString += `&open_now=${urlParameters.openNow}&categories=${urlParameters.categories}`;

      $api.get(`/businesses/search?location=Lyon${queryString}`)
        .then(({ data }) => {
          commit('setRestaurants', data.businesses);
        });
    },

    getRestaurant({ commit }, restaurantAlis) {
      $api.get(`/businesses/${restaurantAlis}`)
        .then(({ data }) => {
          commit('setCurrentRestaurant', data);
        });
    },
  },
  modules: {
  },
});
