//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//引入路由包（vue-router）
import VueRouter from 'vue-router'
//引入自己写的路由规则
import router from './router'
//使用路由
Vue.use(VueRouter)
//创建vm
const vm = new Vue({
  el: '#app',
  router,
  render: (h) => h(App),
})

console.log(vm)
