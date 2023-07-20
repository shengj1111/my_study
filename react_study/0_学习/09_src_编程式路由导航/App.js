import React, { Component } from 'react'
import Header from './components/Header'
// 引入路由库
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import MyNavLink from './components/MyNavLink'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className='row'>
          <div className='col-xs-2 col-xs-offset-2'>
            <div className='list-group'>
              {/* 
                默认路由链接Link，但是不能切换选中颜色              
              */}
              {/* <Link activeClassName='active' className='list-group-item' to='/about'>
                About
              </Link>
              <Link activeClassName='active' className='list-group-item' to='/home'>
                Home
              </Link> */}

              {/*
              NavLin中activeClassName默认是active
                react路由链接
                activeClassName是被选中的样式
              */}
              {/* 
              <NavLink activeClassName='active' className='list-group-item' to='/about'>
                About
              </NavLink>
              <NavLink activeClassName='active' className='list-group-item' to='/home'>
                Home
              </NavLink> 
              */}
              {/* 
                自己封装的NavLink 
                可以通过this.props.children来接受标签体内容，类似vue的slot
                也是控制显示标签体内容
              */}
              <MyNavLink to='/about'>About</MyNavLink>
              <MyNavLink to='/home'>Home</MyNavLink>
            </div>
          </div>
          <div className='col-xs-6'>
            <div className='panel'>
              <div className='panel-body'>
                {/* 注册路由 
                  Swich是解决一个路径出现两个组件
                  Swich就是匹配上了一个就不会出现下一个
                  exact是严格匹配
                */}
                <Switch>
                  {/* Redirect是重定向 */}
                  <Route path='/home' component={Home} />
                  <Route path='/about' component={About} />
                  <Redirect path='/home' />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
