<template>
  <div class="page-header">
    <h2>Vue Router Demo</h2>
    <button @click="forward()">前进</button>
    <button @click="back()">后退</button>
    <button @click="go()">你想怎么走</button>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  methods: {
    forward() {
      //forward 和浏览器上方的页面前进是一个效果
      this.$router.forward(1)
    },
    back() {
      //back 和浏览器上方的页面后退是一个效果
      this.$router.back()
    },
    go() {
      //go 和浏览器上方的页面后退（前进）是一个效果，正数前进，负数后退
      this.$router.go(2)
    },
  },

}
</script>

<style></style>