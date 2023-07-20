import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MyNavLink extends Component {
  render() {
    // this.props.children可以控制标签体内容
    return (
      <NavLink activeClassName='active' className='list-group-item' {...this.props} />
    )
  }
}
