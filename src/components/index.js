import Vue from 'vue'
import testComment from './TestComment'

const common = {
  testComment
}

Object.keys(common).forEach((key) => {
  Vue.component(key, common[key])
})
