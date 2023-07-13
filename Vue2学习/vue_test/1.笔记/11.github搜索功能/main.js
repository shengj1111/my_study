//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'

//创建vm
new Vue({
  el: '#app',
  render: (h) => h(App),
  //创建全局事件总线
  beforeCreate() {
    Vue.prototype.$bus = this
  },
})
