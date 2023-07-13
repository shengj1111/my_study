<template>
  <div>
    <button @click="tick = !tick">点我显示</button>
    <transition name="aa">
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

/* 开始起点,结束终点 */
.aa-enter,
.aa-leave-to {
  transform: translateX(100%);
}
/* 开始终点，结束起点 */
.aa-enter-to,
.aa-leave {
  transform: translateX(0);
}
/* 开始过程，结束过程 */
.aa-enter-active,
.aa-leave-active {
  transition: 0.5s linear;
}
</style>