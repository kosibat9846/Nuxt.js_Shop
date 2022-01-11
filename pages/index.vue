
<template>

<div>
<h1>Products</h1>
  <pre>{{products}}</pre>


  <h1>Categories</h1>
  <pre>{{categories}}</pre>
</div>


</template>

<script>
import {mapState} from "vuex";

import {mapActions} from "vuex";

export default {

  props: ['CardArray'],

computed: {

  ...mapState('modules/loadedProducts',{
    products: state => state.loadedProducts
  }),
  ...mapState('modules/loadedCategories', {
    categories: state => state.loadedCategories
  })


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

