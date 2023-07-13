export default {
  namespaced: true,
  actions: {
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
  },
  mutations: {
    ADD(state, value) {
      //会传入state 里面的的数据
      // console.log(value)
      state.sum += value
    },
    subtraction(state, value) {
      state.sum -= value
    },
  },
  state: {
    sum: 0, //当前的和
    school: '武汉工商学院',
    college: '计算机应用技术',
  },
  getters: {
    big(state) {
      return state.sum * 10
    },
  },
}
