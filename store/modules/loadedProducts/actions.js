
import axios from "axios";

export default{

     nuxtServerInit(vuexContext, context) {
        return axios.get('http://localhost:8000/nosql-products')
          .then(res => {
            const productsArray = [];
            for (const key in res.data) {
              productsArray.push({ ...res.data[key], _id: key });
            }
            vuexContext.commit("setProducts", productsArray);
          })
          .catch(e => context.error(e));
      },

      doSomething(context) {
        return axios.get('http://localhost:8000/nosql-products')
          .then(res => {
            const productsArray = [];
            for (const key in res.data) {
              productsArray.push({ ...res.data[key], _id: key });
            }
            context.commit("setProducts", productsArray);
          })
          .catch(e => {
            console.log(e);
            // context.error(e)
          });
      },

       setProducts(vuexContext, products) {
        vuexContext.commit("setProducts", products);
      },

  // async nuxtServerInit({ commit, dispatch }) {
  //
  //   await dispatch( 'loadedProductsFunc')
  //
  // },
  //
  // async loadedProductsFunc ({commit}) {
  //   const {loadedProducts} = (await axios.get('http://localhost:8000/nosql-products')).data;
  //   console.log(loadedProducts)
  //   commit("setProducts",{loadedProducts})
  // }

};
