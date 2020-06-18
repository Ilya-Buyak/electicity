<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide v-for="slide in slides" :key="slide.key"
      ><img class="swiper__image" :src="slide.src" :alt="slide.alt"
    /></swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';

export default {
  name: 'swiper-example-pagination-fraction',
  title: 'Fraction pagination',
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    };
  },
  computed: {
    slides() {
      return this.$store.getters['swiper/slides'];
    },
  },
};
</script>

<style scoped>
.swiper {
  height: calc(100vh - 169px);
  width: 100%;
  object-fit: cover;
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}
.swiper__image {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.swiper-button-next {
  color: black;
}
.swiper-button-prev {
  color: black;
}
</style>
