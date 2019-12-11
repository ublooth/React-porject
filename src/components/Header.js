import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        我是Header组件！
      </div>
    );
  }
  componentDidMount() { 
    console.log('11', this.props.location.query) // 获取URL参数 方法2
  }
}

export default Header;