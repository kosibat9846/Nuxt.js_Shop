export default{


  inCart(state, n) { // Cart Component
    return state.cartItems.push(n)
  },


  inCartInfo(state, payload) { // Cart Component
      for(let i = 0; i < payload.quantity ; ++i) {
        state.cartItems.push(payload.item);
      }
    },
    outCart(state, n) { // Cart Component
      let index = state.cartItems.findIndex(x => x.id === n)
      return state.cartItems.splice(index, 1)
    },

};
