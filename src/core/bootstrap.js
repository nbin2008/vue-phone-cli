import Vue from 'vue'
import store from '@/store/'
import {
  ACCESS_TOKEN,
  USER_BASE_INFO,
  IS_LOGIN,
  MOBILE,
  VERIFIED,
  ADMIN
} from '@/store/mutation-types'

export default function Initializer () {
  store.commit('SET_TOKEN', Vue.ls.get(ACCESS_TOKEN))
  store.commit('SET_BASE_INFO', Vue.ls.get(USER_BASE_INFO))
  store.commit('SET_IS_LOGIN', Vue.ls.get(IS_LOGIN))
  store.commit('SET_MOBILE', Vue.ls.get(MOBILE))
  store.commit('SET_VERIFIED', Vue.ls.get(VERIFIED))
  store.commit('SET_ADMIN', Vue.ls.get(ADMIN))
}
