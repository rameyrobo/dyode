<template>
<div class="new-arrivals container">
<section>
    <row :gutter="12">
     <column :xs="12">
     <h2 class="header-title section-title"><span class="shop-mob">Shop </span>New Arrivals</h2>
      <swiper class="swiper" :options="swiperOption">
    <swiper-slide><img src="../assets/images/compressed/Product-Carousel-Image.jpeg"><h5 class="product-title">Product Title</h5><h6 class="product-description">Women's T-Shirt</h6><p class="product-price"><span>19.99</span></p></swiper-slide>
    <swiper-slide><img src="../assets/images/compressed/Product-Carousel-Image.jpeg"><h5 class="product-title">Product Title</h5><h6 class="product-description">Women's T-Shirt</h6><p class="product-price"><span>19.99</span></p></swiper-slide>
    <swiper-slide><img src="../assets/images/compressed/Product-Carousel-Image.jpeg"><h5 class="product-title">Product Title</h5><h6 class="product-description">Women's T-Shirt</h6><p class="product-price"><span>19.99</span></p></swiper-slide>
    <swiper-slide><img src="../assets/images/compressed/Product-Carousel-Image.jpeg"><h5 class="product-title">Product Title</h5><h6 class="product-description">Women's T-Shirt</h6><p class="product-price"><span>19.99</span></p></swiper-slide>
    <swiper-slide><img src="../assets/images/compressed/Product-Carousel-Image.jpeg"><h5 class="product-title">Product Title</h5><h6 class="product-description">Women's T-Shirt</h6><p class="product-price"><span>19.99</span></p></swiper-slide>
    <swiper-slide><img src="../assets/images/compressed/Product-Carousel-Image.jpeg"><h5 class="product-title">Product Title</h5><h6 class="product-description">Women's T-Shirt</h6><p class="product-price"><span>19.99</span></p></swiper-slide>
    <swiper-slide><img src="../assets/images/compressed/Product-Carousel-Image.jpeg"><h5 class="product-title">Product Title</h5><h6 class="product-description">Women's T-Shirt</h6><p class="product-price"><span>19.99</span></p></swiper-slide>
    <swiper-slide><img src="../assets/images/compressed/Product-Carousel-Image.jpeg"><h5 class="product-title">Product Title</h5><h6 class="product-description">Women's T-Shirt</h6><p class="product-price"><span>19.99</span></p></swiper-slide>
    <swiper-slide><img src="../assets/images/compressed/Product-Carousel-Image.jpeg"><h5 class="product-title">Product Title</h5><h6 class="product-description">Women's T-Shirt</h6><p class="product-price"><span>19.99</span></p></swiper-slide>
    <swiper-slide><img src="../assets/images/compressed/Product-Carousel-Image.jpeg"><h5 class="product-title">Product Title</h5><h6 class="product-description">Women's T-Shirt</h6><p class="product-price"><span>19.99</span></p></swiper-slide>
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
// core version + navigation, pagination modules:
import 'swiper/swiper.scss'
// configure Swiper to use modules
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
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          breakpoints: {
            992: {
              slidesPerView: 4,
              spaceBetween: 0
            },
            480: {
              slidesPerView: 3,
              spaceBetween: 0
            },
            320: {
              slidesPerView: 2,
              spaceBetween: 0
            }
          }
        }
      }
    }
  }
// End Carousel Script
</script>
<style lang="scss" scoped>
@import 'node_modules/swiper/swiper.scss';
@import '../assets/styles/element-variables.scss';
.new-arrivals.container {
    padding-top: 0;
}
.header-title.section-title {
  @include font-size(2.175rem);
  padding: 1rem 0 1em;
}
.swiper-slide img {
    max-height: 180px;
    margin-bottom: 1rem;
}
.product-description {
    margin-bottom: 1.7rem;
}
.product-price {
  margin-bottom: 1rem;
}
.swiper-button-prev, .swiper-button-next {
  color: $color-black;
}
.product-title {
  @include font-size(1rem);
  font-weight: normal;
  margin-block-end: 1.2em;
}
.product-description {
  @include font-size(.75rem);
  font-weight: 300;
  text-transform: uppercase;
  margin-block-start: 1.3em;
}
.product-title, .product-description {
  font-family: $secondary-font-family;
  font-style: normal;
  text-align: center;
  color: $color-black;
  line-height: 0;
}
.product-price {
  font-family: $primary-font-family;
  @include font-size(1.25rem);
  font-style: normal;
  font-weight: normal;
  line-height: 0;
  text-align: center;
  color: $main-color;
}
.product-price span:before {
  content: '$';
  @include font-size(2.25rem);
  position: relative;
  top:-2px;
}
.swiper-button-prev:after, .swiper-button-next:after {
  @include font-size(1.25rem)
}
@media screen and ( min-width: $layout-breakpoint-small) {
  .swiper-slide img {
    max-height: 220px;
  }
}
@media screen and ( min-width: $layout-breakpoint-medium ) {
  .shop-mob {
    display: none;
  }
  .new-arrivals .colVGR {
    margin-bottom: 10px;
}
  .header-title.section-title {
  @include font-size(3.75rem);
  padding: 2rem 0 3rem;
  }
  .swiper-slide img{
    max-height: 378px;
  }
.product-title {
  @include font-size(1.375rem);
}
.product-description {
  @include font-size(1rem);
}
.product-price {
  @include font-size(1.5rem);
}
}
@media screen and (min-width: $layout-breakpoint-large) {
  .swiper-slide img{
    max-height: 421px;
  }

}
</style>
