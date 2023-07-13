import React, { Component } from 'react'
import './Footer.css'
export default class Footer extends Component {
  // 全选或者全不选
  checkAll = e => {
    const { checkAll } = this.props
    checkAll(e.target.checked)
  }
  // 删除已完成
  deleteAllDone = () => {
    if (window.confirm('是否删除已完成？')) {
      this.props.deleteAlldone()
    }
  }
  render() {
    const { todos } = this.props
    // 总数和已完成
    const doneTotal = todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0)
    const total = todos.length
    return (
      <div className='todo-footer'>
        <label>
          <input
            type='checkbox'
            checked={doneTotal == total ? true : false}
            onChange={this.checkAll}
          />
        </label>
        <span>
          <span>已完成{doneTotal}</span> / 全部{total}
        </span>
        <button className='btn btn-danger' onClick={this.deleteAllDone}>
          清除已完成任务
        </button>
      </div>
    )
  }
}
