import React, { Component } from 'react'
import axios from 'axios'
export default class Search extends Component {
  state = { keyword: '' }
  // 存储关键词
  keyWord = e => {
    this.setState({ keyword: e.target.value })
  }
  // 发送请求获取数据
  getSearchData = async () => {
    const { getData } = this.props
    const { keyword } = this.state
    let res = await axios.get(`http://localhost:3000/api/search/users?q=${keyword}`)
    getData(res.data)
  }
  render() {
    return (
      <section className='jumbotron'>
        <h3 className='jumbotron-heading'>Search Github Users</h3>
        <div>
          <input
            type='text'
            placeholder='enter the name you search'
            onKeyUp={this.keyWord}
          />
          &nbsp;<button onClick={this.getSearchData}>Search</button>
        </div>
      </section>
    )
  }
}
