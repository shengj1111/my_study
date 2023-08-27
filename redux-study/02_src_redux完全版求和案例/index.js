import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// 创建root容器实例
const root = ReactDOM.createRoot(document.getElementById('root'))
// 渲染app
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
