<template>
  <div class="todo-footer" v-if="total">
    <label>
      <input type="checkbox" v-model="isAll" />
    </label>
    <span>
      <span>已完成{{ todoTotal }}</span> / 全部{{ total }}
    </span>
    <button class="btn btn-danger" @click="clearTodos">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: 'MyFooter',
  props: ['todos', 'todosCheckAll', 'todosClear'],
  computed: {
    //总数
    total() {
      return this.todos.length
    },
    todoTotal() {
      //第一种办法
      /* let i = 0
      this.todos.forEach((todo) => {
        if (todo.completed) i++
      })
      return i */
      //第二种方法
      return this.todos.reduce((pre, current) => {
        return pre + (current.completed ? 1 : 0)
      }, 0)

      //第二种方法简写形式
      /* return this.todos.reduce(
        (pre, current) => pre + (current.completed ? 1 : 0),0) */
    },
    isAll: {
      get() {
        return this.total == this.todoTotal && this.total > 0
      },
      set(value) {
        this.todosCheckAll(value)
      },
    },
  },
  methods: {
    clearTodos() {
      if (confirm('确定清空吗？')) {
        this.todosClear()
      }
    },
  },
}
</script>

<style scoped>
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>