<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        v-model="keyWord"
        placeholder="enter the name you search"
      />&nbsp;
      <button @click="getList">Search</button>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Search',
  data() {
    return {
      keyWord: '',
    }
  },
  methods: {
    getList() {
      this.$bus.$emit('getInfoData', {
        users: [],
        isFirst: false,
        isLoading: true,
        errMsg: '',
      })
      //发送请求
      axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
        (response) => {
          this.$bus.$emit('getInfoData', {
            users: response.data.items,
            isLoading: false,
            errMsg: '',
          })
        },
        (error) => {
          //错误信息
          this.$bus.$emit('getInfoData', {
            users: [],
            isLoading: false,
            errMsg: error.message,
          })
        }
      )
    },
  },
}
</script>

<style scoped>
</style>