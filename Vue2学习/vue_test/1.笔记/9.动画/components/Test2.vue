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

/* 开始起点 */
.aa-enter {
  transform: translateX(100%);
}
/* 开始终点 */
.aa-enter-to {
  transform: translateX(0);
}
/* 开始过程 */
.aa-enter-active {
  transition: 0.5s linear;
}
/* 离开起点 */
.aa-leave {
  transform: translateX(0);
}
/* 离开终点 */
.aa-leave-to {
  transform: translateX(100%);
}
/* 结束过程 */
.aa-leave-active {
  transition: 0.5s linear;
}
</style>