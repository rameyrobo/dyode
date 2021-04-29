<template>
  <div class="main">
    <section>
    <row :gutter="12">
     <column :xs="12">
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
    name: 'swiper-example-loop',
    title: 'Loop mode / Infinite loop',
    components: {
      Swiper,
      SwiperSlide
    },
    data() {
      return {
        swiperOption: {
          slidesPerView: 1,
          spaceBetween: 0,
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        }
      }
    }
  }

 //   name: 'swiper-example-responsive-breakpoints',
 //   title: 'Responsive breakpoints',
 //   components: {
 //     Swiper,
 //     SwiperSlide
 //   },
 //   data() {
 //     return {
 //       swiperOption: {
 //         slidesPerView: 5,
 //         spaceBetween: 50,
 //         pagination: {
 //           el: '.swiper-pagination',
 //           clickable: true
 //         },
 //         breakpoints: {
 //           1024: {
 //             slidesPerView: 4,
 //             spaceBetween: 40
 //           },
 //           768: {
 //             slidesPerView: 3,
 //             spaceBetween: 30
 //           },
 //           640: {
 //             slidesPerView: 2,
 //             spaceBetween: 20
 //           },
 //           320: {
 //             slidesPerView: 1,
 //             spaceBetween: 10
 //           }
 //         }
 //       }
 //     }
 //   }
 // }
// End Carousel Script
</script>
<style lang="scss" scoped>
@import '/node_modules/swiper/swiper.scss';
@import '/node_modules/swiper/components/pagination/pagination.scss';

// Swiper Carousel Styles
  .swiper {
    height: 800px;

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

      &.slide-1 {
        background-image:url('../assets/images/compressed/Hero-Image-11.jpeg')
      }
      &.slide-2 {
        background-image:url('../assets/images/compressed/Hero-Image-12.jpeg')
      }
      &.slide-3 {
        background-image:url('../assets/images/compressed/Hero-Image-13.jpeg')
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
  }
// End Swiper Carousel Styles


</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
