<template>
  <li>
    <label>
      <input
        type="checkbox"
        :checked="todo.done"
        @change="handleCheck(todo.id)"
      />
      <!-- 如下代码也能实现功能，但是不太推荐，因为有点违反原则，因为修改了props -->
      <!-- <input type="checkbox" v-model="todo.done"/> -->
      <span v-show="!todo.isEdit">{{ todo.title }}</span>
      <input
        type="text"
        v-show="todo.isEdit"
        :value="todo.title"
        @blur="handleTodo(todo, $event)"
        ref="showTodoTitle"
      />
    </label>
    <!-- 添加一个修改 -->
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
    <button class="btn btn-edit" @click="handleEdit(todo)">编辑</button>
  </li>
</template>

<script>
export default {
  name: 'MyItem',
  //声明接收todo、checkTodo、deleteTodo
  props: ['todo'],
  methods: {
    //勾选or取消勾选
    handleCheck(id) {
      //通知App组件将对应的todo对象的done值取反
      // this.checkTodo(id)
      this.$bus.$emit('checkTodo', id)
    },
    //删除
    handleDelete(id) {
      if (confirm('确定删除吗？')) {
        //通知App组件将对应的todo对象删除
        // this.deleteTodo(id)
        this.$bus.$emit('deleteTodo', id)
      }
    },
    //点击编辑文字变成输入框
    handleEdit(todo) {
      if (todo.hasOwnProperty('isEdit')) {
        todo.isEdit = true
      } else {
        console.log(todo.hasOwnProperty('isEdit'))
        this.$set(todo, 'isEdit', true)
      }
      /* 变成输入框自动获取焦点 */
      //第一种方法（定时器）
      /* setTimeout(() => {
        this.$refs.showTodoTitle.focus()
      }) */

      //第二种方法
      this.$nextTick(function () {
        this.$refs.showTodoTitle.focus()
      })
    },
    handleTodo(todo, e) {
      todo.isEdit = false
      //绑定一个编辑事件（全局总线）
      this.$bus.$emit('updateTdo', todo.id, e.target.value)
    },
  },
}
</script>

<style scoped>
/*item*/
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
  background-color: #ddd;
}

li:hover button {
  display: block;
}
</style>