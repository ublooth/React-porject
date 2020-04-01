import React, { Component } from 'react'
import PropTypes from 'prop-types' // 使用 PropTypes 进行组件传的值的类型检查


export default class Com extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0
    }
  }

  increase() { // 事件写法1
    this.setState({  // this.setState()的返回值是一个新的对象,也就是说是一个新的状态.它使用了Object.assign(),将已修改的属性添加进去.而不是覆盖.
      num: this.state.num + 1
    })
  }

  setAlear = () => { // 事件写法2
    alert('事件写法2')
  }

  fatherClick() {
    this.props.changeClick()
  }
  render() {
   return (
     <div style={{border: "1px solid"}}>
       <p>我是com组件</p>
       <p>{ this.state.num }</p>
       <button onClick={ () => {this.increase()} }>++ 绑定事件方式1</button>
       <br/>
       <button onClick={ this.increase.bind(this) }>++ 绑定事件方式2</button>
       <button onClick={ this.setAlear }>事件写法2</button>
       <p>{ this.props.name }</p>
       <br/>
       <button onClick={ this.fatherClick.bind(this) }>子组件onClick 触发父组件定义事件1</button>
       <br/>
       <button onClick={ this.props.sonClick }>子组件onClick 触发父组件定义事件2</button>
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