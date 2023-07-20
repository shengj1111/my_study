import React, { Component } from 'react'
import { Button } from 'antd'
import { SearchOutlined, YoutubeFilled } from '@ant-design/icons'
export default class App extends Component {
  render() {
    return (
      <div>
        App
        <Button type='primary'>primary</Button>
        <Button type='link'>link</Button>
        <Button type='ghost'>ghost</Button>
        <Button type='ghost' loading>
          loading
        </Button>
        <Button type='primary' icon={<SearchOutlined />} shape='circle'></Button>
        <Button type='primary' icon={<YoutubeFilled />} shape='circle'>
          primary
        </Button>
      </div>
    )
  }
}
