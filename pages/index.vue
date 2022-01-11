
<template>

<div>
<h1>Products</h1>
  <pre>{{products}}</pre>
<!--  {{it}}-->

  <h1>Categories</h1>
  <pre>{{categories}}</pre>
</div>


</template>

<script>
import {mapState} from "vuex";
import {mapGetters} from "vuex";
import {mapActions} from "vuex";

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
  ...mapState('modules/loadedProducts',{
    products: state => state.loadedProducts
  }),
  ...mapState('modules/loadedCategories', {
    categories: state => state.loadedCategories
  })


    // ...mapGetters('modules/loadedProducts',{
    //
    //   products: 'loadedProducts',
    //
    //
    // }),

  // it() {
  //
  //   return this.$store.getters['loadedProducts/loadedProducts']
  // }

  },

  methods: {
    ...mapActions({
      doSomething: 'modules/loadedProducts/doSomething',
      loadCategories: 'modules/loadedCategories/loadCategories'
    }),
  },

  mounted() {
    this.loadCategories();
    this.doSomething();
  }


}

</script>

<style>


</style>

