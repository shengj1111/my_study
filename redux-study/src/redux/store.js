// 引入创建store的函数
import { legacy_createStore as createStore } from 'redux'
import countReducer from './count_reducer'
export default createStore(countReducer)
