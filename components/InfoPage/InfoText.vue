<template>
  <div>
    <div v-for="it in information" :key="it._id">

      <div class="more info d-flex justify-content-between text-center" >
         <div class="col4 flex-fill">
              <h5>OPIS I SZCZEGÓŁY PRODUKTU</h5>
        </div>
     </div>
     <div class="container pt-3" >
       <div class="row">
         <p> {{it.description}}</p>
         <br>
         Normy: {{it.product_details.norm}}
         <br>
         Średnica: {{it.product_details.diameter.diameter}}
         <br>
         Materiał: {{it.product_details.material}}
         <br>
         Ochrona antykotozyjna: {{it.product_details.anti_corrosion_protection}}
         <br>
         Klasa twardości: {{it.product_details.hardness_class}}



        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['information'],
  name: 'InfoText',
}
</script>

<style scoped>
.col4 h6 {
  height: 25px;
  padding-bottom: 25px;
  border-bottom:1px solid lightgrey;
  color: grey;
  cursor: pointer;
}

.col4.active h6 {
  font-weight: bold;
  border-bottom:1px solid black !important;
  color: black;
}
</style>
