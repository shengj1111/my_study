<template>
  <div>
    <Student name="张三" :age="18" college="应用技术学院"></Student>
    <School></School>
  </div>
</template>

<script>
import Student from "./components/Student.vue";
import School from "./components/School.vue";
export default {
  name: "App",
  components: {
    Student,
    School,
  },
};
</script>

<style>
</style>