/* 
  1. 该文件就是创建一个reducer，本质上就是一个函数
  2. reducer 会接收到两个参数，一个是preSate(之前的状态)，一个是动作对象(action)
*/

// 初始化state
const initState = 0
export default function countReducer(preState = initState, action) {
  const { type, data } = action
  switch (type) {
    case 'increment':
      return preState + data
    case 'decrement':
      return preState - data
    default:
      return preState
  }
}
