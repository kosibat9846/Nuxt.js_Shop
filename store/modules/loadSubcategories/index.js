import loadSubcategoriesMutations from './mutations.js';
import loadSubcategoriesActions from './actions.js';
import loadSubcategoriesGetters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {}

    },
  mutations: loadSubcategoriesMutations,
  actions: loadSubcategoriesActions,
  getters: loadSubcategoriesGetters
};
