import cartItemsMutations from './mutations.js';
import cartItemsActions from './actions.js';
import cartItemsGetters from './getters.js';


export default{

  namespaced: true,
  state() {
    return {
      cartItems: []
    };
  },
  mutations: cartItemsMutations,
  actions: cartItemsActions,
  getters: cartItemsGetters


};
