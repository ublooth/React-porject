import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to='/'>首页</Link></li>
          {/* 获取URL参数 方法1 */}
          <li><Link to='/list/张三'>列表</Link></li>
          {/*  // 获取URL参数 方法2 */}
          <li><Link to={{
            pathname: '/header',
            query: {
              userName: '李四',
              userId: 10
            }
          }}>header</Link></li>
          <button onClick={ this.toList.bind(this) }>列表</button>
          <button onClick={ this.toheader.bind(this) }>header</button>
        </ul>
      </div>
    );
  }
  toList() {
    console.log('toList', this) // this里有页面跳转方法 
    this.props.history.push('/list/12')
  }
  toheader() {  // 获取URL参数 方法2
    this.props.history.push({
      pathname:'/header',
      query:{
        userName:'李四'
      }
    })
  }
}

export default Home;