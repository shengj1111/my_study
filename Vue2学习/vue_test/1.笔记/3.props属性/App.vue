<template>
  <div>
    <Student name="张三" :age="18" college="应用技术学院"></Student>
  </div>
</template>

<script>
import Student from "./components/Student.vue";
export default {
  name: "App",
  components: {
    Student,
  },
};
</script>

<style>
</style>