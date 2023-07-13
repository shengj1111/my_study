<template>
  <div>
    <h2>当前的和为：{{ $store.state.sum }}</h2>
    <select v-model.number="number">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">奇数才加</button>
    <button @click="incrementWait">等一会再加</button>
  </div>
</template>

<script>
export default {
  name: 'Count',
  data() {
    return {
      number: 1,
    }
  },
  methods: {
    //注意 需要写逻辑就用dispatch，不需要的话dispatch和commit随便你

    increment() {
      // dispatch 跳转到 action 里
      this.$store.dispatch('add', this.number)
    },
    decrement() {
      //commit 跳转到mutation里面（当没有需要计算的时候可以直接跳转到mutation）
      this.$store.commit('subtraction', this.number)
    },
    incrementOdd() {
      this.$store.dispatch('addOdd', this.number)
    },
    incrementWait() {
      this.$store.dispatch('addWait', this.number)
    },
  },
}
</script>

<style>
button {
  margin-left: 5px;
}
</style>