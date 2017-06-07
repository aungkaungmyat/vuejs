import Vue from 'vue'
import App from './App'
// import Ninjas from './Ninjas.vue'
//
export const bus  =  new Vue();
// Vue.component('ninjas', Ninjas);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
