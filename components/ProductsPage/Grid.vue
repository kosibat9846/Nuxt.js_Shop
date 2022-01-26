<template>

  <div class="container grid">

    <div class="row justify-content-around">
      <div class="row col-6 pb-4 pr-1">
        <div class="dropdown">
          <a class="btn btn-light dropdown-toggle" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sortowanie
            <span style="color:#f2be00;">{{ sortButton }}</span>
          </a>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <a class="dropdown-item" @click="sortDate">Data</a>
            <a class="dropdown-item" @click="sortPrice" >Cena</a>

          </div>
        </div>
      </div>
      <div class="row col-6 flex-row-reverse">
        <div class="view-button">
          <div class="dropdown">
            <button class="btn btn-light dropdown-toggle d-block d-lg-none d-xl-none" role="button" id="MenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">KATEGORIE</button>
            <div  class="dropdown-menu" aria-labelledby="MenuLink">
              <li style="cursor: pointer" v-for="categories in category " :key="categories._id "  @click="sortByCategory(categories.name)" >{{categories.name}}</li>
              <div class="dropdown-divider"></div>

              <div class="dropdown-divider"></div>
              <a class="dropdown-item" @click="reSet">Reset</a>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div   class="col col-xl-3 col-lg-3 d-none d-lg-block d-xl-block" >
          <div class="card-selector">
            <div class="card-body p-5">
              <div  class="search-title">
                <h4>Kategorie</h4>


<!--                <div v-for="categories in category " :key="categories._id" >-->
<!--                  <a data-toggle="dropdown" @click="sortByCategory(categories.name)">{{categories.name}}</a>-->
<!--                  <div class="dropdown-menu subcategory">-->
<!--                    <a v-for="item in categories.subcategory"  @click="sortBySubcategory(item.name)">{{item.name}}</a>-->
<!--                  </div>-->
<!--                </div>-->

              </div>

            </div>
          </div>
        </div>
        <div class="row col-xl-9 col-lg-9 col-md-12 col-sm-12 col-xs-12 text-center">
          <div v-if="this.cards === 0" class="col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <h4 style="margin-left:9rem;margin-right:9rem">Przepraszamy nie możemy znaleźć takiego produktu </h4>
          </div>
            <Card :CardArray="slicedCards" />


          <div class="col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 py-5">
            <button type="button" @click="incCardNumber" class="btn btn-outline-secondary btn-lg btn-block">Więcej +</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Card from './Card.vue'
import {mapActions, mapState} from 'vuex'

export default {
  name:'Grid',
  components: {
    Card
  },

  data() {
    return {
      cards: [],
      showCards: 6,
      sortButton: 'DEFAULT'
    }
  },
  created(){
    this.cards = this.it
  },
  computed: {

    ...mapState('modules/loadedProducts',{
      it: state => state.loadedProducts
    }),
    ...mapState('modules/loadedCategories', {
      category: state => state.loadedCategories
    }),

  slicedCards(){
      let products = [...this.cards] ;
      return products.slice(0, this.showCards)
    },

  },
  methods: {

    ...mapActions({
      loadProducts: 'modules/loadedProducts/loadProducts',
      loadCategories: 'modules/loadedCategories/loadCategories'
    }),

    incCardNumber() {
      return this.showCards += 6
    },

    sortDate() {
       this.cards.sort((a, b) => (a.name.length * 2)-(b.name.length * 4))
       return this.sortButton = 'Data'
    },
    sortPrice() {
       this.cards.sort((a, b) => a.price.nett_price-b.price.nett.price)
       return this.sortButton = 'Cena'
    },

    sortByCategory(name){
      this.cards = this.it.filter((e) => e.category.match(name));
    },

    sortBySubcategory(name){
      this.cards = this.it.filter((e) =>  e.subcategory.match(name));
    },
    reSet() {
      return this.cards = this.it
    },


  },
  mounted() {
    this.loadCategories();
    this.loadProducts();
  },


}
</script>

<style>
.container.grid {
  min-height: 60rem;
}

.container.grid a {
  cursor: pointer !important;
}

.btn-light {
  color: black !important;
  background: white;
  border-radius: 0 !important;
  border: 1px solid grey !important;
}
.dropdown-menu{
  background-color: #eee;
  color: #2c3539;
}

.dropdown-menu > a:hover{
  background-color: #dae0e5

}

.btn-outline-secondary {
  border-radius: 0 !important;
}

/*search options*/

.card-selector {
  color: #DCDCDC;
  height: 40rem;
  background: #2c3539 !important;
  box-shadow: 0 8px 6px 0 rgba(0, 0, 0, 0.1), 0 26px 70px 0 rgba(0, 0, 0, 0.69);
}

.search-title h6 {
  cursor: pointer;
}

.subcategory {
  display: flex;
  flex-flow: column wrap;
}

</style>
