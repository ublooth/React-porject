import React, { Component } from 'react';

class List extends Component {
  render() {
    return (
      <div>
        我是List组件！
        <button onClick={ this.toGoBack.bind(this) }>返回上一页</button>
      </div>
    );
  }
  componentDidMount() {
    console.log(this.props.match.params.id) // 获取URL参数 方法1
  }
  toGoBack() {
    this.props.history.goBack(); // 返回上一页
  }
}

export default List;