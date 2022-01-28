<template>
  <section class="about-us">
    <div class="row p-4">
      <div class="col-6">
        <img class="float-lg-right" src="@/assets/tools.png" >
      </div>
      <div class="col-12 col-sm-6">
        <h1>Witaj w naszym sklepie<br>–o nas</h1>
        <h4><br><br> Sklep METALSHOP zajmuje się sprzedażą artykułów metalowych
          głownie wykorzystywanych w technice zamocowań. Oferujemy produkty najlepszych marek.
          Gwarantujemy najwyższą jakość, oraz konkurencyjne ceny.
          </h4>
      </div>
    </div>
    <div class="row p-4">
      <div class="col-12 col-sm-6 text-sm-left text-md-left ml-sm-0 ml-md-5 ml-lg-5 ml-xl-5 text-lg-left order-sm-first order-12" style="margin-right: -8%; z-index:1;">
        <h1>Znajdziesz u nas:</h1>
        <h4>
          <br><br>
          - Nakrętki <br>
          - Śruby <br>
          - Wkręty <br>
          - Gwoździe <br>
          - Podkładki <br>

          </h4>
      </div>
      <div class="col-6">
        <img src="@/assets/toolbox.png">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutUs'
}
</script>

<style scoped>
.about-us img {
  width: 70%;
  min-width: 300px;
}

.col-12 col-sm-6{

  text-indent: 20px;
}

</style>
