<template>
  <div v-for="(item, index) in arr" :key="index">
    {{ item }}
  </div>
</template>

<script setup lang="ts">
const arr: number[] = [123, 563, 674, 345]
</script>

<style scoped></style>
