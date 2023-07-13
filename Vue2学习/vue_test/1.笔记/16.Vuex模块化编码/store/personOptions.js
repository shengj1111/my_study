export default {
  namespaced: true,
  actions: {},
  mutations: {
    ADD_PERSON(state, personObj) {
      state.persons.unshift(personObj)
    },
  },
  state: {
    persons: [{id: '001', name: '张三'}],
  },
  getters: {},
}
