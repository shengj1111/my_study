<template>
  <div>
    <Test></Test>
    <Test2></Test2>
    <Test3></Test3>
    <Test4></Test4>
  </div>
</template>

<script>
import Test from './components/Test.vue'
import Test2 from './components/Test2.vue'
import Test3 from './components/Test3.vue'
import Test4 from './components/Test4.vue'

//Test 是简单的动画写法
// Test2是Vue里面写法
// Test3是Test2的简写形式
// Test4是多个元素的动画
export default {
  name: 'App',
  components: { Test, Test2, Test3, Test4 },
  data() {
    return {}
  },
}
</script>

<style>
</style>
