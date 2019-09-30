import { syncRouterMap, constantRouterMap, adminRouterMap } from '@/config/router.config'
import router from '@/router'
import { ADD_ROUTERS } from '@/store/mutation-types'
import Vue from 'vue'

const permission = {
  state: {
    routers: constantRouterMap,
    addRouters: []
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
      state.routers = constantRouterMap.concat(routers)
      router.addRoutes(routers)
    }
  },
  actions: {
    GenerateRoutes ({ commit }, data) {
      return new Promise(resolve => {
        let routers = [].concat(syncRouterMap).concat(adminRouterMap)
        Vue.ls.set(ADD_ROUTERS, routers)
        commit('SET_ROUTERS', routers)
        resolve()
      })
    }
  }
}

export default permission
