<template>
  <div id="app">
    <Header />
    <img alt="Vue logo" src="./assets/logo.png">
    <FullCarousel />
    <Categories />
    <NewArrivals />
    <FullHero />
    <FullHeroMobile />
    <Instagram />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import FullCarousel from './components/FullCarousel.vue'
import Categories from './components/Categories.vue'
import NewArrivals from './components/NewArrivals.vue'
import FullHero from './components/FullHero.vue'
import FullHeroMobile from './components/FullHeroMobile.vue'
import Instagram from './components/Instagram.vue'
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
    Categories,
    NewArrivals,
    FullHero,
    FullHeroMobile,
    Instagram
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
