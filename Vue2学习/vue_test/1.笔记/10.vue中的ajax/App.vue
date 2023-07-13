<template>
  <div>
    <button @click="getStudentName">点我获取学生数据</button>
    <button @click="getCars">点我获取汽车数据</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'App',
  methods: {
    getStudentName() {
      //配置axios发送 ajax 请求
      //get 是获取端口号来进行数据传输
      axios
        .get('http://localhost:8080/students/students')
        .then((result) => {
          console.log('请求成功', result.data)
        })
        .catch((err) => {
          console.log('请求失败', err.message)
        })
    },
    getCars() {
      //配置axios发送 ajax 请求
      //get 是获取端口号来进行数据传输
      axios
        .get('http://localhost:8080/cars/cars')
        .then((result) => {
          console.log('请求成功', result.data)
        })
        .catch((err) => {
          console.log('请求失败', err.message)
        })
    },
  },
}
</script>

