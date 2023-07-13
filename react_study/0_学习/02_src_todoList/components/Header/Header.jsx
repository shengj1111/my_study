import React, { Component } from 'react'
import './Header.css'
import { nanoid } from 'nanoid'
export default class Header extends Component {
  handleKeyUp = e => {
    if (e.keyCode === 13 && e.target.value !== '') {
      const todoObj = { id: nanoid(), name: e.target.value, done: false }
      this.props.addTodo(todoObj)
      e.target.value = ''
    }
  }
  render() {
    return (
      <div className='todo-header'>
        <input
          type='text'
          placeholder='请输入你的任务名称，按回车键确认'
          onKeyUp={this.handleKeyUp}
        />
      </div>
    )
  }
}
