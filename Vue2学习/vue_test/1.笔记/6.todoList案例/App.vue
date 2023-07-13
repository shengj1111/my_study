<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <!-- 将添加对象方法传入子组件 -->
        <MyHeader :addTodo="addTodo"></MyHeader>
        <!-- 将消勾选方法和删除方法传入子组件 -->
        <MyList
          :todos="todos"
          :checkTodo="checkTodo"
          :delTodo="delTodo"
        ></MyList>
        <MyFooter
          :todos="todos"
          :todosCheckAll="todosCheckAll"
          :todosClear="todosClear"
        ></MyFooter>
      </div>
    </div>
  </div>
</template>

<script>
//引入组件
import MyFooter from './components/MyFooter.vue'
import MyHeader from './components/MyHeader.vue'
import MyList from './components/MyList.vue'
export default {
  name: 'App',
  components: {
    MyFooter,
    MyHeader,
    MyList,
  },
  //实现数据保存到本地
  watch: {
    todos: {
      handler(value) {
        localStorage.setItem('todos', JSON.stringify(value))
      },
    },
  },
  data() {
    return {
      todos: JSON.parse(localStorage.getItem('todos')),
    }
  },
  methods: {
    //添加一个对象
    addTodo(todoObj) {
      this.todos.unshift(todoObj)
    },
    //取消勾选or勾选
    checkTodo(id) {
      this.todos.forEach((todo) => {
        if (todo.id == id) todo.completed = !todo.completed
      })
    },
    //删除对象
    delTodo(id) {
      this.todos = this.todos.filter((todo) => {
        return todo.id != id
      })
    },
    //全选 or 取消全选
    todosCheckAll(value) {
      this.todos.forEach((todo) => {
        todo.completed = value
      })
    },
    //清除全部
    todosClear() {
      this.todos = this.todos.filter((todo) => {
        return !todo.completed
      })
    },
  },
}
</script>

<style>
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>