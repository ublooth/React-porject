import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import store from '../store';
import {setChangeStr, setChangeCity} from '../store/actionCreator'

class Home extends Component {

  UNSAFE_componentWillMount() {
    console.log("store:", store.getState())
  }
  constructor(props) {
    super(props);
    this.state = store.getState(); // 通过store.getState()拿到state

    store.subscribe(this.changeStateStr.bind(this)) // 添加一个变化监听器。每当 dispatch action 的时候就会执行，state 树中的一部分可能已经变化。
    store.subscribe(this.changeStateCity.bind(this)) // 添加一个变化监听器。每当 dispatch action 的时候就会执行，state 树中的一部分可能已经变化。
  }
  render() {
    return (
      <div>
        <h1>状态管理器数据：{ this.state.str }</h1>
        <h1>状态管理器城市数据：{ this.state.city }</h1>
        <button onClick={ this.changeStr.bind(this) }>修改状态管理器数据</button>
        <button onClick={ this.changeCity.bind(this) }>修改状态管理器城市数据</button>
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
  changeStr() {
    let action = setChangeStr(11);
    store.dispatch(action) //更新 state
  }
  changeCity() {
    let action = setChangeCity();
    store.dispatch(action) //更新 state
  }
  changeStateStr() {
    this.setState(store.getState()) //执行监听函数
  }
  changeStateCity() {
    this.setState(store.getState()) //执行监听函数
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