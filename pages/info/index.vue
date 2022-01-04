<template >
  <div class="container py-5" style="padding-top:70px;">

    <InfoBreadcrumb :information="information"/>
    <InfoBox :information="information"/>
    <InfoText />

    <div class="related-item">
      <hr>
      <h6 class="pb-4">POLECANE PRODUKTY</h6>
      <Card :CardArray="sliceRelatedItems" />
    </div>

  </div>
</template>

<script>
import InfoBreadcrumb from '@/components/InfoPage/InfoBreadcrumb.vue'
import InfoBox from '@/components/InfoPage/InfoBox.vue'
import InfoText from '@/components/InfoPage/InfoText.vue'
import Card from '@/components/ProductsPage/Card.vue'

import { mapState } from 'vuex'
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'

export default {
  name: 'Info',
  components: {
    InfoBreadcrumb, InfoBox, InfoText, Card
  },
  data() {
    return {
      information: [],
      relatedItems: []
    }
  },
  created() {
    this.information = this.infO
    this.relatedItems = this.bringItems
  },
  computed: {

    //   bringItems() {
    // return this.$store.state.loadedProducts
    //   },

    // infO() {
    //   return this.$store.getters.infoLength
    // },

    ...mapState('modules/loadedProducts', {

      bringItems: state => state["modules/loadedProducts"]

    }),

    ...mapGetters('modules/infoPage', {

      infO: 'infoLength'

    }),

  },
    methods: {
      // sendInfo(it, id) {
      //  this.$store.commit('addtoInfo', it, id)
      // }

      ...mapMutations('modules/infoPage', {

        sendInfo: 'addtoInfo'

      }),

      sliceRelatedItems() {
        return this.relatedItems.slice(0, 3)
      },


    },

};
</script>

<style scoped>
hr {
width: 50px;
border-bottom: 1px solid black;
}
.related-item{
  padding-left: 8rem;
  padding-right: 8rem;
  height: auto;
  text-align: center;
}
</style>
