import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import store from '../../store/index'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    // store.subscribe(this.changeStoreStr.bind(this)); // 变化监听器
  }

  componentDidMount() { // 在第一次渲染后调用
    console.log('store.getState()返回应用当前的 state 树。', store.getState())
    // 订阅 store 的变化
    this.unsubscribe = store.subscribe(this.changeStoreStr.bind(this)); // 变化监听器
  }

  // 取消订阅
  componentWillUnmount() { // 在组件从 DOM 中移除之前立刻被调用
    this.unsubscribe();
  }

  changeStoreStr() {
    console.log('变化store.getState()', store.getState())
    this.setState(store.getState())
  }

  changeStr = () => {
    let action = {
      type: 'change_str', // 提交说明
    }
    store.dispatch(action); //分发 action。这是触发 state 变化的惟一途径。
  }

  changeFullName = () => {
    let action = {
      type: 'change_fullname',
    }
    store.dispatch(action)
  }

  render() {
    return (
      <div className="App">
        hello my-react
        <h1>数据：{ this.state.str }</h1>
        <h1>数据name：{ this.state.fullName }</h1>
        <button onClick={ this.changeStr }>修改redux数据</button>
        <button onClick={ this.changeFullName }>修改reduxFullName数据</button>
        <ul>
          <li><Link to='/home'>跳转到home页面redux数据</Link></li>
          <li><Link to='/list'>跳转到list页面</Link></li>

          <li><Link to='/header/10'>跳转到header页面</Link></li>
        </ul>
      </div>
    );
  }
}