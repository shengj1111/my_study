import React, { Component } from 'react'
import Detail from '../Detail'
import { Link, Route } from 'react-router-dom'

export default class Message extends Component {
  state = {
    message: [
      { id: '1', title: '消息1' },
      { id: '2', title: '消息2' },
      { id: '3', title: '消息3' },
    ],
  }
  /* 编程式路由导航 */
  // push跳转 params参数
  showPush = (id, title) => {
    this.props.history.push(`/home/message/detail/${id}/${title}`)
  }
  // replace跳转 params参数
  showRepalce = (id, title) => {
    this.props.history.replace(`/home/message/detail/${id}/${title}`)
  }

  render() {
    const { message } = this.state
    return (
      <div>
        <ul>
          {/* state参数 */}
          {message.map(item => {
            return (
              <li key={item.id}>
                <Link to={`/home/message/detail/${item.id}/${item.title}`}>
                  {item.title}
                </Link>
                &nbsp;&nbsp;
                <button onClick={() => this.showPush(item.id, item.title)}>
                  push查看
                </button>
                &nbsp;&nbsp;
                <button onClick={() => this.showRepalce(item.id, item.title)}>
                  replace查看
                </button>
                &nbsp;&nbsp;
              </li>
            )
          })}
        </ul>
        <hr />
        <Route path='/home/message/detail/:id/:title' component={Detail}></Route>
      </div>
    )
  }
}
