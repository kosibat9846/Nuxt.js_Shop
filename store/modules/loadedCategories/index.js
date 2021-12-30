
import loadedCategoriesMutations from './mutations.js';
import loadedCategoriesActions from './actions.js';
import loadedCategoriesGetters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      loadedCategories: []
    };
  },
  mutations: loadedCategoriesMutations,
  actions: loadedCategoriesActions,
  getters: loadedCategoriesGetters
};
