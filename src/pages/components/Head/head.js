import React, { Component } from 'react'
import './head.scss'

class Head extends Component {
  constructor(props) {
    super(props); 
    this.state = { 
      status: 0,
    }
  }
  render() {
    return (
      <div className="head-head">
        <div className="head-name">ele.me</div>
        <div className="head-login">登录|注册</div>
        {/* <div>{ this.state.status }</div> */}
      </div>
    );
  }
  componentDidMount() {
    
  }
}

export default Head;