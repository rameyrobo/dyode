import Vue from 'vue'
import 'vue-simple-accordion/dist/vue-simple-accordion.css';
import vuetify from '@/plugins/vuetify' 
import './assets/styles/element-variables.scss'
import App from './App.vue'

Vue.config.productionTip = false


new Vue({
  render: function (h) { return h(App) },
  vuetify,
}).$mount('#app')
