import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
class Header extends Component {
  back = () => {
    this.props.history.goBack()
  }
  forward = () => {
    this.props.history.goForward()
  }

  render() {
    return (
      <div className='row'>
        <div className='col-xs-offset-2 col-xs-8'>
          <div className='page-header'>
            <h2>React Router Demo</h2>
          </div>
          <button onClick={this.back}>后退</button>
          <button onClick={this.forward}>前进</button>
        </div>
      </div>
    )
  }
}
// withRouter是一个函数，可以加工一般组件，让一般组件拥有路由组件的一些特有的API
// withRouter返回值是一个新的组件
export default withRouter(Header)
