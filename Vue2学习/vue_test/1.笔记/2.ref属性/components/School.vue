<template>
  <div class="School">
    <h2 ref="SchoolNameH2">学校名称：{{ name }}</h2>
    <h2>学校名称：{{ address }}</h2>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      name: "武汉工商学院",
      address: "武汉",
    };
  },
};
</script>

<style>
.School {
  background-color: gray;
}
</style>
