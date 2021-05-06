<template>
  <div class="main">
    <section>
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide class="slide-1">
          <div class="title">Shop New Arrivals</div>
          <div class="subtitle">Our coolest new items are waiting for you</div>
          <div class="text"><button>Shop Now</button></div>
        </swiper-slide>
        <swiper-slide class="slide-2">
          <div class="title">Shop New Arrivals</div>
          <div class="subtitle">Our coolest new items are waiting for you</div>
          <div class="text"><button>Shop Now</button></div>
        </swiper-slide>
        <swiper-slide class="slide-3">
          <div class="title">Shop New Arrivals</div>
          <div class="subtitle">Our coolest new items are waiting for you</div>
          <div class="text"><button>Shop Now</button></div>
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
  min-height: 46vw;  &.slide-1 {
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

@media (min-width: $layout-breakpoint-medium) {  
.swiper-slide {
  .title, .subtitle, .text {
    visibility: visible;
  }
}    
.title {
  margin-bottom: 20px;
  font-size: 4rem;
  font-weight: bold;
  }
.subtitle {
  margin-bottom: 20px;
  font-size: 2rem;
  }
.text {
    max-width: 430px;
    line-height: 1.32;
  }
}
// End Swiper Carousel Styles
</style>
