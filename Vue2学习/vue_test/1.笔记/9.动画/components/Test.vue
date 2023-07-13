<template>
  <div>
    <button @click="tick = !tick">点我显示</button>
    <transition name="hello">
      <h2 v-show="tick">你好啊</h2>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tick: true,
    }
  },
}
</script>

<style scoped>
h2 {
  background-color: red;
}

/* 使用动画 */

/* 设置动画 */
.hello-enter-active {
  animation: a 1s;
}
/* 设置结束动画 */
.hello-leave-active {
  animation: a 1s reverse;
}
/* 定义动画 */
@keyframes a {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0px);
  }
}
</style>