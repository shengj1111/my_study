import React, { Component } from 'react'
import axios from 'axios'
export default class App extends Component {
  state = { student: [] }

  getStudentData = () => {
    axios.get('http://localhost:3000/api/students').then(
      res => {
        this.setState({ student: res.data })
      },
      error => {}
    )
  }

  render() {
    const { student } = this.state
    return (
      <div>
        {student.map(s => {
          return (
            <div key={s.id}>
              <h2>{s.id}</h2>
              <h2>{s.name}</h2>
              <h2>{s.age}</h2>
            </div>
          )
        })}
        <button onClick={this.getStudentData}>点我获取数据</button>
      </div>
    )
  }
}
