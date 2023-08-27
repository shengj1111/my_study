import React, { Component } from 'react'

export default class Count extends Component {
  state = { count: 0 }
  // setState函数式写法
  /* 
    setState式一个异步调用
  */
  add = () => {
    const { count } = this.state
    this.setState((state, props) => {
      return { count: count + 1 }
    })
  }
  render() {
    return (
      <div>
        <h1>当前求和为：{this.state.count}</h1>
        <button onClick={this.add}>点我加1</button>
      </div>
    )
  }
}
