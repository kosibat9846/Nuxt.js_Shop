
import axios from "axios";

export default{



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



};
