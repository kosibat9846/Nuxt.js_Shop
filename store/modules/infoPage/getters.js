export default{

      infoLength(state) { // Info Component
      if(state.infoPage.length > 0) {
        return state.infoPage.slice(0,1)
      }
    }



};
