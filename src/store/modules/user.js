import Vue from 'vue'
import config from '@/config/defaultSettings'
import { ACCESS_TOKEN, USER_BASE_INFO } from '@/store/mutation-types'

const user = {
  state: {
    token: '',
    name: '',
    email: '',
    phone: '',
    avatar: ''
  },
  mutations: {
    SET_BASE_INFO: (state, baseInfo) => {
      state.name !== undefined && (state.name = baseInfo.name)
      state.email !== undefined && (state.email = baseInfo.email)
      state.phone !== undefined && (state.phone = baseInfo.phone)
      state.avatar !== undefined && (state.avatar = baseInfo.avatar)
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    }
  },
  actions: {
    setBaseInfo: ({commit}, baseInfo) => {
      commit('SET_BASE_INFO', baseInfo)
      Vue.ls.set(USER_BASE_INFO, baseInfo, config.expire)
    },
    setToken: ({commit}, token) => {
      commit('SET_TOKEN', token)
      Vue.ls.set(ACCESS_TOKEN, token, config.expire)
    },
    Logout: ({commit}) => {
      //
    }
  }
}

export default user
