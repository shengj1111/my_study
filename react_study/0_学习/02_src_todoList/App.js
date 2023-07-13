import React from 'react'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
class App extends React.Component {
  state = {
    todos: [
      {
        id: 0,
        name: '吃饭',
        done: true,
      },
      {
        id: 1,
        name: '睡觉',
        done: false,
      },
      {
        id: 2,
        name: '打游戏',
        done: false,
      },
    ],
  }
  // 添加一个todo
  addTodo = todoObj => {
    const { todos } = this.state
    const newTodos = [todoObj, ...todos]
    this.setState({ todos: newTodos })
  }
  // 修改状态
  updateTodo = (id, done) => {
    const { todos } = this.state
    const newTodo = todos.map(todoObj => {
      if (todoObj.id === id) return { ...todoObj, done }
      else return todoObj
    })

    this.setState({ todos: newTodo })
  }
  // 删除一个todo
  deleteTodo = id => {
    const { todos } = this.state
    const newTodo = todos.filter(todoObj => {
      if (todoObj.id !== id) return todoObj
    })
    this.setState({ todos: newTodo })
  }
  // 全选
  checkAll = flag => {
    console.log(flag)
    const { todos } = this.state
    const newTodos = todos.map(todo => {
      return { ...todo, done: flag }
    })
    this.setState({ todos: newTodos })
  }
  // 删除已完成
  deleteAlldone = () => {
    const { todos } = this.state
    const newTodos = todos.filter(todo => {
      if (!todo.done) return todo
    })
    this.setState({ todos: newTodos })
  }

  render() {
    const { todos } = this.state
    return (
      <div className='todo-container'>
        <div className='todo-wrap'>
          <Header addTodo={this.addTodo} />
          <Main
            todos={this.state.todos}
            updateTodo={this.updateTodo}
            deleteTodo={this.deleteTodo}
          />
          <Footer
            todos={todos}
            checkAll={this.checkAll}
            deleteAlldone={this.deleteAlldone}
          />
        </div>
      </div>
    )
  }
}
export default App
