export default{

      addtoInfo(state, n) { // Info Component
        console.log('store id',n._id)
       return state.infoPage.push(n)
    }

};
