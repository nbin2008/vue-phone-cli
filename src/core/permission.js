import Vue from 'vue'
import router from '@/router'

import { setDocumentTitle, domTitle } from '@/utils/domUtil'
import { ACCESS_TOKEN } from '@/store/mutation-types'

router.beforeEach((to, from, next) => {
  console.log(to)
  to.meta && (typeof to.meta.title !== 'undefined' && setDocumentTitle(`${to.meta.title} - ${domTitle}`))
  if (Vue.ls.get(ACCESS_TOKEN)) {
    if (to.path === '/user/login') {
      next({path: '/'})
    } else {
      next()
      // const redirect = decodeURIComponent(from.query.redirect || to.path)
      // next({ path: redirect })
    }
  } else if (!to.meta.needLogin) {
    next()
  } else {
    next({ path: '/user/login', query: { redirect: to.fullPath } })
  }
})

router.afterEach(() => {})
