<template>
  <div class="">
    <h2>学生名称：{{ myName }}</h2>
    <h2>学生年龄：{{ myAge }}</h2>
    <h2>学生年龄：{{ myCollge }}</h2>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      myName: this.name,
      myAge: this.age,
      myCollge: this.college,
    };
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      default: 19,
    },
    college: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
</style>
