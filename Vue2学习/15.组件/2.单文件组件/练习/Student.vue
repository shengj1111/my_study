<template>
  <div>
    <h3>{{ name }}</h3>  
    <h3>{{ stuId }}</h3>  
    <h3>{{ college }}</h3>  
  </div>
</template>

<script>

export default {
  name:'Student',
  data() {
    return {
      name: '盛继',
      stuId: 21395135,
      college: "应用技术学研"
    }
  }
}
</script>

<style></style>