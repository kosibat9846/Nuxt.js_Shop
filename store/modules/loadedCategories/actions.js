import axios from "axios";

export default{

     nuxtServerInit(vuexContext, context) {
        return axios
          .get('http://localhost:8000/nosql-categories')
          .then(res => {
            const categoriesArray = [];
            for (const key in res.data) {
              categoriesArray.push({ ...res.data[key], _id: key });
            }
            vuexContext.commit("setCategories", categoriesArray);
          })
          .catch(e => context.error(e));
      },


          setCategories(vuexContext, categories) {
        vuexContext.commit("setCategories", categories);
      }

};