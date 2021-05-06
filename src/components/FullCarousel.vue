<template>
  <div class="main">
    <section>
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide class="slide-1">
          <div class="title header-title">
            <h2 class="section-title main-color">Shop New Arrivals</h2>
          </div>
          <div class="subtitle main-color">Our coolest new items are waiting for you</div>
          <div class="text"><button class="shop-now black-bg white">Shop Now</button></div>
        </swiper-slide>
        <swiper-slide class="slide-2">
          <div class="title header-title">
            <h2 class="section-title color-white">Shop New Arrivals</h2>
          </div>
          <div class="subtitle color-white">Our coolest new items are waiting for you</div>
          <div class="text"><button class="shop-now black-bg white">Shop Now</button></div>
        </swiper-slide>
        <swiper-slide class="slide-3">
          <div class="title header-title">
            <h2 class="section-title color-white">Shop New Arrivals</h2>
          </div>
          <div class="subtitle color-white">Our coolest new items are waiting for you</div>
          <div class="text"><button class="shop-now black-bg white">Shop Now</button></div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      </section>
    </div>
</template>


<script scoped>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'

  export default {
    name: 'swiper-example-pagination',
    title: 'Pagination',
    components: {
      Swiper,
      SwiperSlide
    },
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        }
      }
    }
  }
  </script>

<style lang="scss" scoped>
@import '../assets/styles/element-variables.scss';
@import '/node_modules/swiper/swiper.scss';
@import '/node_modules/swiper/components/pagination/pagination.scss';

// Swiper Carousel Styles
.swiper-slide {
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  box-sizing: border-box;
  padding: 0 80px;
  background-color: transparent;
  max-height: 46vw;  
  
  &.slide-1 {
    background-image:url('../assets/images/compressed/Hero-Image-11.jpeg')
  }
  &.slide-2 {
    background-image:url('../assets/images/compressed/Hero-Image-12.jpeg')
  }
  &.slide-3 {
    background-image:url('../assets/images/compressed/Hero-Image-13.jpeg')
  }
  .title, .subtitle, .text {
    visibility: hidden;
  }
}
.swiper-pagination-bullet {
  background-color: rgba(255, 255, 255, 0.6) !important;
}
.swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet {
    margin: 0 6px;
    background-color: rgba(255, 255, 255, 0.6);
}

@media (min-width: $layout-breakpoint-medium) {  
.swiper-slide {
  min-height: 46vw;  
  .title, .subtitle, .text {
    visibility: visible;
    text-align:left;
    float: left;
  }
.title {
  margin-bottom: 20px;
  @include font-size(1.75rem);
  font-weight: bold;
  margin-bottom: 0;
  line-height: 1rem;
  }
.subtitle {
  margin-bottom: 20px;
  @include font-size(1.185rem);
  }
.text {
    max-width: 430px;
    line-height: 1.32;
  }
}
.swiper-pagination-bullet {
    width: 28px !important;
    height: 28px !important;
}
.swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet {
  margin: 0 10px;
  }    
}
@media screen and (min-width: $layout-breakpoint-large) {
  .title {
  @include font-size(2.5rem !important);
  }
.subtitle {
  @include font-size(1.685rem !important);
  }
}
// End Swiper Carousel Styles
</style>
