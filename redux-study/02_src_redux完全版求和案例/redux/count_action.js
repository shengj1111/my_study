/* 
  该文件就是生成count的action对象
*/

import { INCREMENT, DECREMENT } from './constant'
export const createIncrementAction = data => ({ type: INCREMENT, data })

export const createDecrementAction = data => ({ type: DECREMENT, data })
