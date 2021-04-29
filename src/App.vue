<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Dyode msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Dyode from './components/Dyode.vue'
import Vue from 'vue';
import { Row, Column } from 'vue-grid-responsive';

Vue.component('row', Row);
Vue.component('column', Column);

export default {
  name: 'App',
  components: {
    Dyode
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
