import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ConfigProvider } from 'antd'
// 改变自定义主题
ReactDOM.render(
  <ConfigProvider theme={{ token: { colorPrimary: '#00b96b' } }}>
    <App />
  </ConfigProvider>,
  document.getElementById('root')
)
