<template>
  <ul class="todo-main">
    <!-- 将App传入的取消勾选方法继续传入子组件 -->
    <MyItem
      v-for="todoObj in todos"
      :key="todoObj.id"
      :todoObj="todoObj"
      :checkTodo="checkTodo"
      :delTodo="delTodo"
    ></MyItem>
  </ul>
</template>

<script>
import MyItem from './MyItem.vue'
export default {
  name: 'MyList',
  components: {
    MyItem,
  },
  //接收父组件传入的数据
  props: ['todos', 'checkTodo', 'delTodo'],
}
</script>

<style scoped>
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>