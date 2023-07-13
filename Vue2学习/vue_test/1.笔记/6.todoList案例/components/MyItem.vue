<template>
  <li>
    <label>
      <input
        type="checkbox"
        :checked="todoObj.completed"
        @change="checkTodosCompeled(todoObj.id)"
      />
      <span>{{ todoObj.title }}</span>
    </label>
    <button class="btn btn-danger" @click="todoDel(todoObj.id)">删除</button>
  </li>
</template>

<script>
export default {
  name: 'MyItem',
  //接收取消方法checkTodo
  props: ['todoObj', 'checkTodo', 'delTodo'],
  methods: {
    checkTodosCompeled(id) {
      this.checkTodo(id)
    },
    todoDel(id) {
      if (confirm('确定删除吗？')) {
        this.delTodo(id)
      }
    },
  },
}
</script>

<style scoped>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: #ccc;
}

li:hover button {
  display: block;
}
</style>