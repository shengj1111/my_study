import React, { Component } from 'react'
import Item from '../Item'
export default class List extends Component {
  render() {
    const { total } = this.props
    console.log(total)
    return (
      <div className='row'>
        {total.map(item => {
          return <Item key={item.id} {...item} />
        })}
      </div>
    )
  }
}
