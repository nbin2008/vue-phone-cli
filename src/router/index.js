import Vue from 'vue'
import Router from 'vue-router'
import { constantRouterMap, syncRouterMap } from '@/config/router.config'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/',
  routes: constantRouterMap.concat(syncRouterMap)
})
