import React, { Component } from 'react'
import Search from './component/Search'
import List from './component/List'

export default class App extends Component {
  state = { total: [] }

  getData = data => {
    this.setState({ total: data.items })
  }
  render() {
    const { total } = this.state
    return (
      <div className='container'>
        <Search getData={this.getData} />
        <List total={total} />
      </div>
    )
  }
}
