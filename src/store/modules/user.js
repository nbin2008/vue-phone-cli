import Vue from 'vue'
import config from '@/config/defaultSettings'
import api from '@/api'
import ajax from '@/utils/ajax'
import {
  ACCESS_TOKEN,
  USER_BASE_INFO,
  IS_LOGIN,
  MOBILE,
  VERIFIED,
  ADMIN
} from '@/store/mutation-types'

const user = {
  state: {
    token: '',
    mobile: '',
    isLogin: false,
    isAdmin: false,
    isVerified: false,
    info: {
      username: '',
      company: '',
      avatar: '',
      id: ''
    }
  },
  mutations: {
    SET_BASE_INFO: (state, baseInfo) => {
      if (baseInfo) {
        baseInfo.username && (state.info.username = baseInfo.username)
        baseInfo.company && (state.info.company = baseInfo.company)
        baseInfo.avatar && (state.info.avatar = baseInfo.avatar)
        baseInfo.id && (state.info.id = baseInfo.id)
      }
    }, // 待删除
    SET_IS_LOGIN: (state, boolean) => {
      state.isLogin = boolean
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_MOBILE: (state, mobile) => {
      state.mobile = mobile
    },
    SET_ADMIN: (state, boolean) => {
      state.isAdmin = boolean
    },
    SET_VERIFIED: (state, boolean) => {
      state.isVerified = boolean
    }
  },
  actions: {
    setBaseInfo: ({commit}, baseInfo) => {
      commit('SET_BASE_INFO', baseInfo)
      Vue.ls.set(USER_BASE_INFO, baseInfo, config.expire)
    },
    // 设置token
    setToken: ({commit}, token) => {
      Vue.ls.set(ACCESS_TOKEN, token, config.expire)
      commit('SET_TOKEN', token)
    },
    setMobile: ({ commit }, mobile) => {
      Vue.ls.set(MOBILE, mobile)
      commit('SET_MOBILE', mobile)
    },
    setAdmin: ({ commit }, boolean) => {
      Vue.ls.set(ADMIN, boolean)
      commit('SET_ADMIN', boolean)
    },
    setVerified: ({ commit }, boolean) => {
      Vue.ls.set(VERIFIED, boolean)
      commit('SET_VERIFIED', boolean)
    },
    // 设置是否登录，必须设置后才能跳转到登录页
    setIsLogin: ({ state, commit, rootState, dispatch }, boolean) => {
      Vue.ls.set(IS_LOGIN, boolean, config.expire)
      commit('SET_IS_LOGIN', boolean)
      dispatch('GenerateRoutes')
    },
    // 登出
    logout ({ commit, state }) {
      return new Promise((resolve) => {
        ajax({
          url: api.auth.logout,
          type: 'post',
          params: {}
        }).then(res => {
          if (res.code === 200) {
            Vue.ls.clear()
            resolve()
          }
        })
      })
    }
  }
}

export default user
