import React from 'react'
function Count() {
  // 第一个Hook函数 useState: 给予函数拥有自己的state
  const [count, setCount] = React.useState(0)

  function add() {
    // setCount(count + 1) //setCount第一种写法
    setCount(count => count + 1)
  }
  React.useEffect(() => {
    let timer = setInterval(() => {
      console.log(111)
      setCount(count => count + 1)
    }, 2000)
    // 返回的函数相当于componentWillUnMount
    return () => {
      clearInterval(timer)
    }
  }, [count]) // 不写数组就相当于componentDidMount 和 componentDidUpdate
  // 这个就是获取ref的数据
  React.useRef()
  return (
    <div>
      <h1>当前求和为：{count}</h1>
      <button onClick={add}>点我加1</button>
    </div>
  )
}

export default Count
