import React, { Component } from 'react'


export default class Test extends Component {
  constructor(props) { // 初始化函数(构造方法)，首先执行这个函数,props是参数
    super(props); // 应在其他语句之前前调用 super(props)
    this.state = { //  // 用this.state初始化数据,在render里输出
      text: '我是test组件',
      name: '我是test组件的数据',
      bool: true,

    }
  }

 

  // 一个组件类必须要实现一个 render 方法，这个 render 方法必须要返回一个 JSX 元素。
  render() {
    return (
      <div>
        <hi></hi>
      </div>
    )
  }
}