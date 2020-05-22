import React, { Component } from 'react'

class Index extends Component {
  componentDidMount() {
    console.log('获取路由', this.props.location)  // 获取URL参数
  }
  render() {
    return (
      <div>index</div>
    )
  }
}
export default Index;