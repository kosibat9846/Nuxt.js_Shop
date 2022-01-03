import infoPageMutations from './mutations.js';
import infoPageActions from './actions.js';
import infoPageGetters from './getters.js';

export default {
  // namespaced: true,
  state() {
    return {
      infoPage: []
    };
  },
  mutations: infoPageMutations,
  actions: infoPageActions,
  getters: infoPageGetters
};
