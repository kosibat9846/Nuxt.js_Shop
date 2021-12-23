<template>
  <div>
    <Carousel />
    <AboutUs />
  </div>
</template>

<script>
import Carousel from '@/components/HomePage/Carousel.vue'
import AboutUs from '@/components/HomePage/AboutUs.vue'

export default {
  components: {
    Carousel, AboutUs
  }
}

</script>
