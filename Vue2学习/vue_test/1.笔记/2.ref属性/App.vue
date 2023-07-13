<template>
  <div>
    <School ref="aa"></School>
    <button @click="showDOM">点我显示DOM元素</button>
  </div>
</template>

<script>
import School from "./components/School.vue";
export default {
  name: "App",
  components: {
    School,
  },
  methods: {
    showDOM() {
      console.log(this.$refs.aa);
    },
  },
};
</script>

<style>
</style>