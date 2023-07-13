//搭建Vuex中最为核心的store

//引入Vue
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
//引入countOptions
import countOptions from './countOptions'
import personOptions from './personOptions'
//使用 Vuex
Vue.use(Vuex)

//导出（暴露）Vuex的store实例

export default new Vuex.Store({
  modules: {
    countOptions,
    personOptions,
  },
})
