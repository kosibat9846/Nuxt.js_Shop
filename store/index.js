
import axios from "axios";

export const state = () => ({
  infoPage:[],
  cartItems:[],

  loadedProducts: [],

  // loadedCategories: [],





});


export const mutations = {

  setProducts(state, products) {
    state.loadedProducts = products;
  },

  // setCategories(state,categories){
  //   state.loadedCategories = categories;
  // },

  inCart(state, n) { // Cart Component
    return state.cartItems.push(n)
  },
  outCart(state, n) { // Cart Component
    let index = state.cartItems.findIndex(x => x.id === n)
    return state.cartItems.splice(index, 1)
  },
  addtoInfo(state, n) { // Info Component
    return state.infoPage.push(n)
  }

};

export const actions = {
/////////// PRODUKTY
  nuxtServerInit(vuexContext, context) {
    return axios
      .get('http://localhost:8000/nosql-products')
      .then(res => {
        const productsArray = [];
        for (const key in res.data) {
          productsArray.push({ ...res.data[key], _id: key });
        }
        vuexContext.commit("setProducts", productsArray);
      })
      .catch(e => context.error(e));
  },

  setProducts(vuexContext, products) {
    vuexContext.commit("setProducts", products);
  },
/////////// KATEGORIE
  //    nuxtServerInit(vuexContext, context) {
  //   return axios
  //     .get('http://localhost:8000/nosql-categories')
  //     .then(res => {
  //       const categoriesArray = [];
  //       for (const key in res.data) {
  //         categoriesArray.push({ ...res.data[key], _id: key });
  //       }
  //       vuexContext.commit("setCategories", categoriesArray);
  //     })
  //     .catch(e => context.error(e));
  // },

  //  setCategories(vuexContext, categories) {
  //   vuexContext.commit("setCategories", categories);
  // },

  /////////// PODKATEGORIE

};

export const getters = {

  loadedProducts(state) {
    return state.loadedProducts;
  },

  // loadedCategories(state) {
  //     return state.loadedCategories;
  //   },


  itemsNumber(state){  // Cart Component
    return state.cartItems.length
  },
  totalPrice(state) { // Cart Component
    if (state.cartItems.length != 0){
      return state.cartItems.reduce((a, b) => {
        return (b.price== null ) ? a : a + b.price.nett_price
      }, 0)
    }
  },
  infoLength(state) { // Info Component
    if(state.infoPage.length > 0) {
      return state.infoPage.splice(0, 1)
    }
  }


}

