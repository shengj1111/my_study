import React, { Component } from 'react'

const data = [
  {
    id: '1',
    context: 'aaa',
  },
  {
    id: '2',
    context: 'bbb',
  },
  {
    id: '3',
    context: 'ccc',
  },
]

export default class Detail extends Component {
  render() {
    const { id, title } = this.props.match.params
    const findRes = data.find(item => {
      return item.id === id
    })
    console.log(findRes)
    return (
      <ul>
        <li>ID:{id}</li>
        <li>TITLE:{title}</li>
        <li>CONTENT:{findRes.context}</li>
      </ul>
    )
  }
}
