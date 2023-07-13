<template>
  <div>
    <h2>当前的和为：{{ sum }}</h2>
    <!-- getters 取值是 $store.getters.函数名字 -->
    <h2>当前的和放大十倍为：{{ big }}</h2>
    <h2>我在{{ school }}{{ college }}</h2>
    <select v-model.number="number">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(number)">+</button>
    <button @click="decrement(number)">-</button>
    <button @click="incrementOdd(number)">奇数才加</button>
    <button @click="incrementWait(number)">等一会再加</button>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions, mapMutations } from 'vuex'
export default {
  name: 'Count',
  data() {
    return {
      number: 1,
    }
  },
  methods: {
    /* //自己写的
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
    }, */
    //通过mapActions生成对应的方法（指向actions）但是要在函数调用的位置传参数
    ...mapActions({
      increment: 'add',
      incrementOdd: 'addOdd',
      incrementWait: 'addWait',
    }),
    //通过mapMutations生成对应的方法（指向mutations）但是要在函数调用的位置传参数
    ...mapMutations({ decrement: 'subtraction' }),
  },
  computed: {
    //计算属性获取state的值（对象形式）
    // ...mapState({ sum: 'sum', college: 'college', school: 'school' }),
    //计算属性获取state的值（数组形式）
    ...mapState(['sum', 'college', 'school']),
    //计算属性获取state的值（对象形式）
    ...mapGetters({ big: 'big' }),
    //计算属性获取state的值（数组形式）
    ...mapGetters(['big']),
  },
}
</script>

<style>
button {
  margin-left: 5px;
}
</style>