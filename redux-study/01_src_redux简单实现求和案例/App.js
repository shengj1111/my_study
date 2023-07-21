import React, { Component } from 'react'
import Count from './components/Count'
import './app.css'
export default class App extends Component {
  render() {
    return (
      <div className='box'>
        当前求和app显示为：
        <Count></Count>
      </div>
    )
  }
}
