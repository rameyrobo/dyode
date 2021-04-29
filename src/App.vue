<template>
  <div id="app">
    <header>
      Header
    </header>
    <img alt="Vue logo" src="./assets/logo.png">
    <FullCarousel />
    <Categories />
    <NewArrivals />
    <FullCTA />
  </div>
</template>

<script>
import FullCarousel from './components/FullCarousel.vue'
import Categories from './components/Categories.vue'
import NewArrivals from './components/NewArrivals.vue'
import FullCTA from './components/FullCTA.vue'
import Vue from 'vue';

import { Row, Column } from 'vue-grid-responsive';
Vue.component('row', Row);
Vue.component('column', Column);

export default {
  name: 'App',
  components: {
    FullCarousel,
    Categories,
    NewArrivals,
    FullCTA
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
