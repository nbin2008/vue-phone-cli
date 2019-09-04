import Vue from 'vue'
import TestComment from './TestComment'

const common = {
  TestComment
}

Object.keys(common).forEach((key) => {
  Vue.component(key, common[key])
})
