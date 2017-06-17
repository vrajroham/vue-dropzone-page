// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import store from './store/index'
// import { sync } from 'vuex-router-sync'

// sync(router)

window.$ = window.jQuery = require('jquery')
Vue.config.productionTip = false
window.toastr = require('toastr')
window.toastr.options.showMethod = 'slideDown'
window.toastr.options.hideMethod = 'slideUp'
window.toastr.options.closeMethod = 'slideUp'
window.toastr.options.progressBar = true
window.toastr.options.timeOut = 10000
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
