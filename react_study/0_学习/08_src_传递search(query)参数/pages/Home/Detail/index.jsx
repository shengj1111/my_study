import React, { Component } from 'react'
import qs from 'query-string'

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
    // 接收search参数
    const { search } = this.props.location
    // 将search参数转换为对象
    const res = qs.parse(search)
    const { id, title } = res
    const findRes = data.find(item => {
      return item.id === id
    })
    return (
      <ul>
        <li>ID:{id}</li>
        <li>TITLE:{title}</li>
        <li>CONTENT:{findRes.context}</li>
      </ul>
    )
  }
}
