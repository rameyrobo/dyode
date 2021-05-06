<template>
  <div id="app">
    <Header />
    <FullCarousel />
    <FullCarouselMobile />
    <Categories />
    <NewArrivals />
    <FullHero />
    <FullHeroMobile />
    <Instagram />
    <Newsletter />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import FullCarousel from './components/FullCarousel.vue'
import FullCarouselMobile from './components/FullCarouselMobile.vue'
import Categories from './components/Categories.vue'
import NewArrivals from './components/NewArrivals.vue'
import FullHero from './components/FullHero.vue'
import FullHeroMobile from './components/FullHeroMobile.vue'
import Instagram from './components/Instagram.vue'
import Newsletter from './components/Newsletter.vue'
import Vue from 'vue';

import {
  Card,
  Main,
  Footer,
  Image,
  PageHeader,
} from 'element-ui';
import {
  Row,
  Column
} from 'vue-grid-responsive';

Vue.use(Card);
Vue.use(Main);
Vue.use(Footer);
Vue.use(Image);
Vue.use(PageHeader);
Vue.component('row', Row);
Vue.component('column', Column);

export default {
  name: 'App',
  components: {
    Header,
    FullCarousel,
    FullCarouselMobile,
    Categories,
    NewArrivals,
    FullHero,
    FullHeroMobile,
    Instagram,
    Newsletter
  }
}
</script>

<style lang="scss">
#app {
  font-family: Lato, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

</style>
