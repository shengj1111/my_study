import React, { Component } from 'react'
import './Main.css'
import PropTypes from 'prop-types'
import Item from '../Item/Item'
export default class Main extends Component {
  // 对类型进行限制
  static propTypes = {
    todos: PropTypes.array.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    updateTodo: PropTypes.func.isRequired,
  }

  render() {
    const { updateTodo, todos, deleteTodo } = this.props
    return (
      <ul className='todo-main'>
        {todos.map(todo => {
          return (
            <Item
              key={todo.id}
              {...todo}
              updateTodo={updateTodo}
              deleteTodo={deleteTodo}
            />
          )
        })}
      </ul>
    )
  }
}
