import React, { Component } from 'react'
import './index.css'
export default class Item extends Component {
  render() {
    const { avatar_url, login, html_url } = this.props
    return (
      <div className='card'>
        <a href={html_url} target='_blank' rel='noreferrer'>
          <img alt='head' src={avatar_url} style={{ width: '100px' }} />
        </a>
        <p className='card-text'>{login}</p>
      </div>
    )
  }
}
