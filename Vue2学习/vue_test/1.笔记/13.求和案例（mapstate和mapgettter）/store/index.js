//搭建Vuex中最为核心的store

//引入Vue
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
//使用 Vuex
Vue.use(Vuex)

//创建actions——用于响应组件动作
const actions = {
  add(context, value) {
    //会获取到小型的store和值
    context.commit('ADD', value)
    // console.log(value)
  },
  addOdd(context, value) {
    if (context.state.sum % 2) context.commit('ADD', value)
  },
  addWait(context, value) {
    setTimeout(() => {
      context.commit('ADD', value)
    }, 1000)
  },
}

//创建mutations-用于操作数据（state）
const mutations = {
  ADD(state, value) {
    //会传入state 里面的的数据
    // console.log(value)
    state.sum += value
  },
  subtraction(state, value) {
    state.sum -= value
  },
}
// 创建state——用于存储数据
const state = {
  sum: 0, //当前的和
  school: '武汉工商学院',
  college: '计算机应用技术',
}

//创建getters —— 用于加工state中的数据（类似于计算属性）
const getters = {
  big(state) {
    return state.sum * 10
  },
}

//导出（暴露）Vuex的store实例

export default new Vuex.Store({
  actions,
  mutations,
  state,
  getters,
})
