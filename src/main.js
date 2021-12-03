import Vue from 'vue'
import App from './App'
import router from './router'


Vue.config.productionTip = false

require('./plugins');

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
