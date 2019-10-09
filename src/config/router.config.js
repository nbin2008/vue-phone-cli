import BasicLayout from '@/layouts/BasicLayout'

export const syncRouterMap = [
  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    meta: { title: '首页' },
    redirect: '/home/index'
  },
  {
    path: '/home',
    component: BasicLayout,
    children: [
      {
        path: '/home/index',
        meta: { title: '首页' },
        component: () => import('@/views/home/index')
      }
    ]
  }
]

export const constantRouterMap = [
  {
    path: '/user',
    name: '/user',
    component: BasicLayout,
    redirect: '/user/login',
    children: [
      {
        path: '/user/login',
        name: 'login',
        meta: { title: '登录', guest: true },
        component: () => import('@/views/user/Login')
      }
    ]
  },
  {
    path: '/test',
    component: BasicLayout,
    redirect: '/test/test',
    children: [
      {
        path: '/test/test',
        name: 'Test',
        meta: { title: '测试页', guest: true },
        component: () => import('@/views/test/Test')
      }
    ]
  }
]
