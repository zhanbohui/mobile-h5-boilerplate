import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import http from './utils/http'
import FastClick from 'fastclick'
import i18n from './lang/index'
import 'vant/lib/index.css'
import Vant from 'vant'

Vue.use(Vant)

Vue.config.productionTip = false
Vue.prototype.$http = http
// 解决移动端300ms点击延迟
// iphone 11 以上不需要引进
const device = navigator.userAgent.toLocaleLowerCase().match(/cpu iphone os (.*?) like mac os/)
if (!device || parseInt(device[1]) < 11) {
  FastClick.attach(document.body)
}

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
