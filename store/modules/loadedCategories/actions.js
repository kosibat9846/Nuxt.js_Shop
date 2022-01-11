import axios from "axios";

export default {


  loadCategories(context) {
    return axios
      .get('http://localhost:8000/nosql-categories')
      .then(res => {
        const categoriesArray = [];
        for (const key in res.data) {
          categoriesArray.push({...res.data[key], _id: key});
        }
        context.commit("setCategories", categoriesArray);
      })
      .catch(e => context.error(e));
  },


  setCategories(vuexContext, categories) {
    vuexContext.commit("setCategories", categories);
  }

};
