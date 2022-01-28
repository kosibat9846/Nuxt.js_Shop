export default{

      infoLength(state) { // Info Component
      if(state.infoPage.length > 0) {


        return [state.infoPage.find((item) => item._id === state.infoPage[state.infoPage.length - 1]._id)];
        return state.infoPage.slice(0,1)
      }
    }



};
