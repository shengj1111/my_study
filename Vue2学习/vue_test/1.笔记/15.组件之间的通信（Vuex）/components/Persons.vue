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
      this.$store.commit('ADD_PERSON', personObj)
    },
  },
  computed: {
    ...mapState(['persons', 'sum']),
  },
}
</script>

<style>
</style>