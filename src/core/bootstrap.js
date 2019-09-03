import Vue from 'vue'
import store from '@/store/'
import {
  ACCESS_TOKEN,
  USER_BASE_INFO
} from '@/store/mutation-types'

export default function Initializer () {
  store.commit('SET_TOKEN', Vue.ls.get(ACCESS_TOKEN))
  store.commit('SET_BASE_INFO', Vue.ls.get(USER_BASE_INFO) || {})
}
