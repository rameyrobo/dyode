<template>
<div class="new-arrivals">
<section>
    <row :gutter="12">
     <column :xs="12">
     <h2>New Arrivals</h2>
      <swiper class="swiper" :options="swiperOption">
    <swiper-slide><img src="../assets/images/compressed/Product-Carousel-Image.jpeg"></swiper-slide>
    <swiper-slide><img src="../assets/images/compressed/Product-Carousel-Image.jpeg"></swiper-slide>
    <swiper-slide><img src="../assets/images/compressed/Product-Carousel-Image.jpeg"></swiper-slide>
    <swiper-slide><img src="../assets/images/compressed/Product-Carousel-Image.jpeg">r</swiper-slide>
    <swiper-slide><img src="../assets/images/compressed/Product-Carousel-Image.jpeg"></swiper-slide>
    <swiper-slide><img src="../assets/images/compressed/Product-Carousel-Image.jpeg"></swiper-slide>
    <swiper-slide><img src="../assets/images/compressed/Product-Carousel-Image.jpeg"></swiper-slide>
    <swiper-slide><img src="../assets/images/compressed/Product-Carousel-Image.jpeg"></swiper-slide>
    <swiper-slide><img src="../assets/images/compressed/Product-Carousel-Image.jpeg"></swiper-slide>
    <swiper-slide><img src="../assets/images/compressed/Product-Carousel-Image.jpeg"></swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
      </column>
    </row>
    </section>
</div>
</template>
<script scoped>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
// core version + navigation, pagination modules:
import { Navigation, Pagination } from 'swiper'
import 'swiper/swiper.scss'
// configure Swiper to use modules
Swiper.use([Navigation, Pagination]);

  export default {
    name: 'swiper-example-responsive-breakpoints',
    title: 'Responsive breakpoints',
    components: {
      Swiper,
      SwiperSlide
    },
    data() {
      return {
        swiperOption: {
          slidesPerView: 5,
          spaceBetween: 50,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          breakpoints: {
            768: {
              slidesPerView: 4,
              spaceBetween: 30
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 20
            },
            320: {
              slidesPerView: 2,
              spaceBetween: 10
            }
          }
        }
      }
    }
  }
// End Carousel Script
</script>
<style lang="scss" scoped>
@import '/node_modules/swiper/swiper.scss';
</style>
