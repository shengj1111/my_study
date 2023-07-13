import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import Item from '../Item'
export default class List extends Component {
  state = { total: [] }
  componentDidMount() {
    PubSub.subscribe('data', (_, stateData) => {
      this.setState({ total: stateData })
    })
  }
  render() {
    const { total } = this.state
    return (
      <div className='row'>
        {total.map(item => {
          return <Item key={item.id} {...item} />
        })}
      </div>
    )
  }
}
