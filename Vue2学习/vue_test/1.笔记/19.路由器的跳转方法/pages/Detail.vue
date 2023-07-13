<template>
  <div>
    <ul>
      <!-- 通过组件中的$route.query 接收传输过来的数据 -->
      <li>{{ id }}</li>
      <li>{{ title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  //接收参数
  props: ['id', 'title'],
  computed: {
    // id() {
    //   return this.$route.params.id
    // },
    // title() {
    //   return this.$route.params.title
    // }
  },
}
</script>

<style></style>