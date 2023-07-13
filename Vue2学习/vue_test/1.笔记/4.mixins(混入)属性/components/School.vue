<template>
  <div class="School">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="showName">点我弹窗</button>
  </div>
</template>

<script>
import { mixin2 } from "../mixin";
import { mixin } from "../mixin";
export default {
  data() {
    return {
      name: "武汉工商学院",
      address: "武汉",
    };
  },
  mixins: [mixin, mixin2],
};
</script>

<style>
.School {
  background: gray;
}
</style>