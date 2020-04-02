import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    console.log('获取路由this.props.match', this.props.match)  // 获取URL参数 方法1
    console.log('获取路由this.props.match.params.xxxxx', this.props.match.params.id)  // 获取URL参数 方法1
  }

  toGoBack = () => {
    this.props.history.goBack(); // 返回上一页
  }

  goBox = () => { /// 路由带参数3
    console.log('this里有页面跳转方法', this) // this里有页面跳转方法 
    this.props.history.push({
      pathname: '/box',
      query: {
        phone: 13723775229,
        address: '厦门市'
      }
    })
  }

  render() {
    return(
      <div>
        我是header页面
        <br/>
        <button onClick={ this.toGoBack }>返回上一页</button>

        {/* 路由带参数2 */}
        <div><Link to={{
          pathname: '/box',
          query: {
            name: '小小',
            nameId: 18
          }
        }}>跳转到box页面</Link></div>
        <button onClick={ this.goBox }>onClick事件传参跳转到box页面</button>
      </div>
    )
  }
}