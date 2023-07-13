<template>
  <div>
    <h2>人员列表</h2>
    <h3>Count组件的和为：{{ sum }}</h3>
    <input type="text" v-model="name" @keyup.enter="addpersons" />
    <ul>
      <li v-for="p in persons" :key="p.id">{{ p.name }}</li>
    </ul>
  </div>
</template>

<script>
import { nanoid } from 'nanoid'
import { mapState } from 'vuex'
export default {
  name: 'Persons',
  data() {
    return {
      name: '',
    }
  },
  methods: {
    addpersons() {
      const personObj = { id: nanoid(), name: this.name }
      //自己写函数的解决办法
      this.$store.commit('personOptions/ADD_PERSON', personObj)
    },
  },
  computed: {
    ...mapState('personOptions', ['persons']),
    ...mapState('countOptions', ['sum']),
  },
}
</script>

<style>
</style>