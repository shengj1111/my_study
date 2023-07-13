<template>
  <div>
    <School></School>
    <Student></Student>
  </div>
</template>

<script>
import Student from './student';
import School from './school';
export default {
  name:'App',
  components:{
    Student,
    School
  }
}
</script>

<style>

</style>