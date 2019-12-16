import React, { Component } from 'react';

import store from '../store'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState(); // 通过store.getState()拿到state

  }
  render() {
    return (
      <div>
        <h1>状态管理器数据：{ this.state.str }</h1>
        我是Header组件！
      </div>
    );
  }
  componentDidMount() { 
    console.log('11', this.props.location.query) // 获取URL参数 方法2
  }
}

export default Header;