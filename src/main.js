import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import '../node_modules/tailwindcss/tailwind.css'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
