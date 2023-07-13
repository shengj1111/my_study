<template>
  <div class="School">
    <h2>学校名称：{{ name | aa }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <input type="text" v-fbind="address" name="" id="" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '武汉工商学院',
      address: '武汉',
    }
  },
}
</script>

<style>
.School {
  background: gray;
}
</style>