import React, { Component } from 'react'
import MenuBar from '../../components/menuBar'

class order extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  toGoBack() {
    this.props.history.go(-1); // 返回上一级路由
  }
  render() {
    return (
      <div>
        <div className="head-head">
          <span className="more" onClick={this.toGoBack.bind(this)}></span>
          <span className="name" style={{fontWeight: 800,}}>订单列表</span>
        </div>
        <MenuBar
          url={ this.props.match.path }
        ></MenuBar>
      </div>
    )
  }
}
export default order;