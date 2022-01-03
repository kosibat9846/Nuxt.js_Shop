export default{

    itemsNumber(state){  // Cart Component
      return state.cartItems.length
    },
    totalPrice(state) { // Cart Component
      if (state.cartItems.length != 0){
       return state.cartItems.reduce((a, b) => {
         return (b.price.nett_price == null ) ? a : a + b.price.nett_price
       }, 0)
      }
    },

};
