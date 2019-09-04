import BasicLayout from '@/layouts/BasicLayout'

export const syncRouterMap = [
  {
    path: '/home',
    component: BasicLayout,
    children: [
      {
        path: '/home/homeIndex',
        meta: { title: '首页' },
        component: () => import('@/views/home/homeIndex')
      }
    ]
  }
]

export const constantRouterMap = [
  {
    path: '/',
    name: '/',
    component: BasicLayout,
    redirect: '/index',
    children: [
      {
        path: '/index',
        name: 'index',
        meta: { title: '首页' },
        component: () => import('@/views/Index')
      }
    ]
  },
  {
    path: '/user',
    name: '/user',
    component: BasicLayout,
    redirect: '/user/login',
    children: [
      {
        path: '/user/login',
        name: 'login',
        meta: { title: '登录' },
        component: () => import('@/views/user/Login')
      }
    ]
  },
  {
    path: '*',
    redirect: '/404'
  },
  {
    path: '/404',
    name: '404',
    meta: { title: '404' },
    component: () => import(/* webpackChunkName: "fail" */ '@/views/404')
  },
  {
    path: '/test',
    component: BasicLayout,
    redirect: '/test/test',
    children: [
      {
        path: '/test/test',
        name: 'Test',
        meta: { title: '测试页' },
        component: () => import('@/views/test/Test')
      }
    ]
  }
]
