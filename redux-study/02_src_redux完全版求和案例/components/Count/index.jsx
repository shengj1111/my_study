import React, { Component } from 'react'
// 引入store
import store from '../../redux/store'
import { createDecrementAction, createIncrementAction } from '../../redux/count_action'
/* 
  1. getState()： 获取store中状态的值
  2. dispatch(): 想reducer发送处理请求
  3. subscribe(): 检测redux 发生的改变

  注意：
   (1). redux和vuex的区别就是redux中的数据发生改变并不会发生页面的变化，
          需要去调用 subscribe() 这个函数去监测状态的变化 
*/

export default class Count extends Component {
  // 组件挂载钩子
  componentDidMount() {
    // 调用页面更新
    store.subscribe(() => {
      this.setState({})
    })
  }

  // 加法
  increament = () => {
    const { value } = this.selectNum
    store.dispatch(createIncrementAction(value * 1))
  }
  // 减法
  decreament = () => {
    const { value } = this.selectNum
    store.dispatch(createDecrementAction(value * 1))
  }
  // 奇数加
  increamentIfOdd = () => {
    if (store.getState() % 2 == 1) {
      this.increament()
    }
  }
  // 两秒后再加
  increamentWait = () => {
    setTimeout(() => {
      this.increament()
    }, 2000)
  }
  render() {
    return (
      <div>
        当前求和为：{store.getState()}
        <br />
        <select name='op' ref={c => (this.selectNum = c)}>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
        </select>
        <button onClick={this.increament}>+</button>
        <button onClick={this.decreament}>-</button>
        <button onClick={this.increamentIfOdd}>奇数才加</button>
        <button onClick={this.increamentWait}>等两秒再加</button>
      </div>
    )
  }
}
