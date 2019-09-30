import Vue from 'vue'
import TestComment from './TestComment'

//
import {
  TransferDom,
  PopupPicker,
  ConfirmPlugin,
  ToastPlugin,
  Popup,
  Datetime,
  XSwitch,
  XAddress
} from 'vux'
Vue.directive('transfer-dom', TransferDom)
Vue.component('popup-picker', PopupPicker)
Vue.component('popup', Popup)
Vue.component('datetime', Datetime)
Vue.component('x-switch', XSwitch)
Vue.component('x-address', XAddress)
Vue.use(ConfirmPlugin)
Vue.use(ToastPlugin)

const common = {
  TestComment
}
Object.keys(common).forEach((key) => {
  Vue.component(key, common[key])
})
