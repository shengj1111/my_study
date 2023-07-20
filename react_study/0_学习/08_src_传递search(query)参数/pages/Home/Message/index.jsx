import React, { Component } from 'react'
import Detail from '../Detail'
import { Link, Route } from 'react-router-dom'

export default class Message extends Component {
  state = {
    message: [
      { id: 1, title: '消息1' },
      { id: 2, title: '消息2' },
      { id: 3, title: '消息3' },
    ],
  }
  render() {
    const { message } = this.state
    return (
      <div>
        <ul>
          {/* search参数 相当于query传参 */}
          {message.map(item => {
            return (
              <li key={item.id}>
                <Link to={`/home/message/detail?id=${item.id}&title=${item.title}`}>
                  {item.title}
                </Link>
                &nbsp;&nbsp;
              </li>
            )
          })}
        </ul>
        <hr />
        {/* search参数无须接受 */}
        <Route path='/home/message/detail' component={Detail}></Route>
      </div>
    )
  }
}
