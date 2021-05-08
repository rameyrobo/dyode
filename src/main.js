import Vue from 'vue'
import './assets/styles/element-variables.scss'
import 'vue-simple-accordion/dist/vue-simple-accordion.css';
import App from './App.vue'

Vue.config.productionTip = false


new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
