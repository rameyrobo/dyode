import Vue from 'vue'
import Element from 'element-ui'
import './assets/styles/element-variables.scss'
import App from './App.vue'

Vue.use(Element)
Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
