


import loadedProductsMutations from './mutations.js';
import loadedProductsActions from './actions.js';
import loadedProductsGetters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      loadedProducts: []
    };
  },
  mutations: loadedProductsMutations,
  actions: loadedProductsActions,
  getters: loadedProductsGetters
};
