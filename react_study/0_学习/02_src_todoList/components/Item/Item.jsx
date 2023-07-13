import React, { Component } from 'react'
import './Item.css'

export default class Item extends Component {
  state = { mouse: false }
  // 鼠标移入移出
  handleMouse = flag => {
    return () => {
      this.setState({ mouse: flag })
    }
  }
  // 删除todo
  deleteTodo = () => {
    const { deleteTodo, id } = this.props
    if (window.confirm('是否删除')) {
      deleteTodo(id)
    }
  }
  // 切换
  handleCheck = id => {
    const { updateTodo } = this.props
    return e => {
      updateTodo(id, e.target.checked)
    }
  }
  render() {
    const { name, done, id } = this.props
    return (
      <li
        style={{ backgroundColor: this.state.mouse ? '#ddd' : '' }}
        onMouseEnter={this.handleMouse(true)}
        onMouseLeave={this.handleMouse(false)}
      >
        <label>
          <input type='checkbox' checked={done} onChange={this.handleCheck(id)} />
          <span>{name}</span>
        </label>
        <button
          className='btn btn-danger'
          onClick={this.deleteTodo}
          style={{ display: this.state.mouse ? '' : 'none' }}
        >
          删除
        </button>
      </li>
    )
  }
}
