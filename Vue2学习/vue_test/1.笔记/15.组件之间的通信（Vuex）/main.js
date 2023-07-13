//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//引入store(就是Vuex插件的store)
import store from './store'
//创建vm
new Vue({
  el: '#app',
  render: (h) => h(App),
  store,
  //创建全局事件总线
  beforeCreate() {
    Vue.prototype.$bus = this
  },
})
