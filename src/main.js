// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import router from './router'
import App from './App'
import store from '@/store/'
import './core/use'
import './core/permission'
import bootstrap from '@/core/bootstrap'
import { VueAxios } from '@/utils/axios'
require('es6-promise').polyfill()

FastClick.attach(document.body)
Vue.use(VueAxios)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  created: bootstrap,
  render: h => h(App)
}).$mount('#app-box')
