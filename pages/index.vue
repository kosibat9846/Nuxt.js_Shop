
<template>

<div>

  {{products}}
  {{it}}


</div>


</template>

<script>
import {mapState} from "vuex";
import {mapGetters} from "vuex";

export default {

  props: ['CardArray'],

computed: {
  // ...mapState({
  //            it: state => state["modules/loadedProducts"]
  // }),

    // products() {
    //   return this.$store.getters.loadedProducts;
    // }
    // ...mapState({
    //
    //   products: state => state["modules/loadedProducts"]
    //
    // })
  ...mapState({
    it: state => state['loadedProducts']
  }),

    ...mapGetters('modules/loadedProducts',{

      products: 'loadedProducts',


    }),

  // it() {
  //
  //   return this.$store.getters['loadedProducts/loadedProducts']
  // }

  }
}

</script>

<style>


</style>

