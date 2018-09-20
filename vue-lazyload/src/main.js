// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import VueLazyload from 'vue-lazyload'
//引入图片
import pp from './assets/logo.png'
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: pp,
  loading: pp,//懒得找loding.gif啦
  attempt: 1
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
