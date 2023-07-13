import Vue from "vue";
import App from './App.vue'
//引入mixin
import { mixin } from "./mixin";

//全局混入
Vue.mixin(mixin)

new Vue({
  el: '#app',
  render: h => h(App),
})