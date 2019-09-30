import Vue from 'vue'
import axios from 'axios'
import store from '@/store'
import { VueAxios } from './axios'
import { ACCESS_TOKEN } from '@/store/mutation-types'
import qs from 'qs'

// 创建 axios 实例
const service = axios.create({
  baseURL: process.env.API_ROOT, // api base_url /api
  timeout: 10000 // 请求超时时间
})

const err = error => {
  if (error.response) {
    const data = error.response.data
    const token = Vue.ls.get(ACCESS_TOKEN)
    if (error.response.status === 403) {
    }
    if (
      error.response.status === 401 &&
      !(data.result && data.result.isLogin)
    ) {
      if (token) {
        Vue.ls.clear()
        store.dispatch('logout').then(() => {
          setTimeout(() => {
            window.location.reload()
          }, 1500)
        })
      }
    }
  }
  return Promise.reject(error)
}

// request interceptor
service.interceptors.request.use(config => {
  const token = Vue.ls.get(ACCESS_TOKEN)
  if (token) {
    config.headers['Authorization'] = 'bearer ' + token // 让每个请求携带自定义 token 请根据实际情况自行修改
  }
  if (config.method === 'post') {
    if (config.headers['Content-Type'] !== 'multipart/form-data') {
      config.data = qs.stringify(config.data)
    }
  }
  return config
}, err)

// response interceptor
service.interceptors.response.use(response => {
  return response.data
}, err)

const installer = {
  vm: {},
  install (Vue) {
    Vue.use(VueAxios, service)
  }
}

export { installer as VueAxios, service as axios }
