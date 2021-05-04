<template>
<div class="new-arrivals container">
<section>
    <row container :gutter="12">
     <column :xs="12">
     <h2 class="header-title section-title">New Arrivals</h2>
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
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
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
          slidesPerView: 4,
          spaceBetween: 0,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          breakpoints: {
            992: {
              slidesPerView: 4,
              spaceBetween: 0
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 0
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 40
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
.swiper-slide img {
    max-height: 370px;
}
</style>
