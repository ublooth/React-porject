import React, { Component } from 'react'
import PropTypes from 'prop-types' // 使用 PropTypes 进行组件传的值的类型检查


export default class Com extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0
    }
  }

  render() {
   return (
     <div style={{border: "1px solid", display: 'inline-block', padding: '10px'}}>
       
     </div>
   ) 
  }
}
Com.propTypes = {
  // PropTypes 提供验证器，可用于确保组件接收到的数据类型是有效的。
  name: PropTypes.string, // 字符串
  changeClick: PropTypes.func, // 函数
  sonClick: PropTypes.func, // 函数
}