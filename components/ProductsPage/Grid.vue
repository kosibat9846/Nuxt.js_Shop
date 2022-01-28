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
            <a class="dropdown-item" @click="sortPriceUp" >Cena rosnąco</a>
            <a class="dropdown-item" @click="sortPriceDown" >Cena malejąco</a>


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

                <div class="dropleft" v-for="categories in category " :key="categories._id">
                  <button class="dropleft-btn"  data-toggle="dropdown" >{{categories.name}}
                    <span class="caret"></span></button>
                  <ul class="dropdown-menu">
                    <li v-for="item in categories.subcategory"  @click="sortBySubcategory(item.name)">{{item.name}}</li>

                  </ul>
                </div>
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
    sortPriceUp() {
       this.cards.sort((a, b) => a.price.gross_price-b.price.gross_price)
       return this.sortButton = 'Cena >'
    },

    sortPriceDown() {
      this.cards.sort((a, b) => b.price.gross_price-a.price.gross_price)
      return this.sortButton = 'Cena <'
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
.btn-outline-secondary {
  border-radius: 0 !important;
}

.card-selector {
  color: #DCDCDC;
  height: auto;
  background: #2c3539 !important;
  box-shadow: 0 8px 6px 0 rgba(0, 0, 0, 0.1), 0 26px 70px 0 rgba(0, 0, 0, 0.69);
}

.search-title h6 {
  cursor: pointer;
}

/*///////////////////////////////////*/
.dropleft button {

  background: #2c3539;
  width: 180px
}


.dropdown-menu {
  background-color: #eee;
  color: #2c3e50;
  width: auto;
  height: auto;
  padding-top: 20px;
  padding-bottom: 20px;
  cursor: pointer;
}
.dropdown-menu li{

  padding: 10px;

}
.dropdown-menu > li:hover{
  background-color: #dae0e5;
  padding-bottom: 20px;
  padding-top: 20px;

}

/*///////////////////////////////////*/
/* Fixed sidenav, full height */
.dropleft-btn {
  height: auto;
  width: auto;
  padding-top: 10px;
  padding-bottom: 10px;
  border: none;
  color: white;
  cursor: pointer;
  text-align: left;

}

/* Style the sidenav links and the dropdown button */
.dropleft > button:hover{

  text-decoration: none;
  color: #818181;
  display: block;
  border: none;
  background-color: #2c3e50 ;
  width:100%;
  cursor: pointer;

}

/* On mouse-over */
.dropleft-btn a:hover{
  color: #f1f1f1;
}

/* Dropdown container (hidden by default). Optional: add a lighter background color and some left padding to change the design of the dropdown content */
.dropdown-container {
  display: none;
  background-color: #262626;
  padding-left: 8px;
}

/* Optional: Style the caret down icon */
.fa-caret-down {
  float: right;
  padding-right: 8px;
}
</style>
