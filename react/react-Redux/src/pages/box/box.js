import React, { Component } from 'react'

export default class Box extends Component {

  componentDidMount() {
    console.log('路由参数this.props.location', this.props.location) // click事件路由带参数获取方法
    console.log('路由参数this.props.location.query', this.props.location.query)  // click事件路由带参数获取方法
  }

  render() {
    return(
      <div>我是Box页面</div>
    )
  }
}