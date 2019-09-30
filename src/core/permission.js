import Vue from 'vue'
import router from '@/router'
import store from '@/store'
import { ADD_ROUTERS, ACCESS_TOKEN, IS_LOGIN } from '@/store/mutation-types'

import { setDocumentTitle } from '@/utils/domUtil'

router.beforeEach((to, from, next) => {
  to.meta && (typeof to.meta.title !== 'undefined' && setDocumentTitle(`${to.meta.title}`))
  // 设置单独的背景色 默认白色
  document.body.style.backgroundColor = to.meta.bgColor || '#fff'
  // 路由判断
  if (Vue.ls.get(ACCESS_TOKEN) && Vue.ls.get(IS_LOGIN)) {
    if (to.path === '/user/login') {
      next({path: '/'})
    } else {
      if (store.state.permission.addRouters.length === 0) {
        store.dispatch('GenerateRoutes', Vue.ls.get(ADD_ROUTERS)).then(() => {
          next({ ...to, replace: true })
        })
      } else {
        next()
      }
    }
  } else if (to.meta.guest) {
    next()
  } else {
    next({ path: '/user/login', query: { redirect: to.fullPath } })
  }
})

router.afterEach(() => {})
