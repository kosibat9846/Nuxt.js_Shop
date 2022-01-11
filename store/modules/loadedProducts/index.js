
import loadedProductsMutations from './mutations.js';
import loadedProductsActions from './actions.js';
import loadedProductsGetters from './getters.js';
import axios from "axios";

export default {
  namespaced: true,
  state() {
    return {
      loadedProducts: []
    }
  },



  // actions: {
  //   // nuxtServerInit is called by Nuxt.js before server-rendering every page
  //   nuxtServerInit({ commit }, { req }) {
  //     console.log('in');
  //   },
  // },


  mutations: loadedProductsMutations,
  //actions: loadedProductsActions,
  getters: loadedProductsGetters
};
