export default{

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

   

};