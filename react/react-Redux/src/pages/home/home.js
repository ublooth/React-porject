import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import store from '../../store'
import {getChangeName} from '../../store/actionCreator'


export default class Home extends Component{
  constructor(props) {
    super(props);
    this.state = store.getState()
  }

  componentDidMount() { // 在第一次渲染后调用
    // 订阅 store 的变化
    this.unsubscribe = store.subscribe(this.changeStoreStr); // 变化监听器
  }

  componentWillUnmount() { // 在组件从 DOM 中移除之前立刻被调用
    this.unsubscribe(); // 取消订阅
  }

  changeStoreStr = () => {
    this.setState(store.getState())
  }

  asd = () => {
    store.dispatch(getChangeName())
  }


  render() {
    return(
      <div className="App">
        hello my-react ==> home页面
        <div><Link to="/list">跳转到list页面</Link></div>
        <h2>{ this.state.str }</h2>
        <h2>{ this.state.fullName }</h2>
        <button onClick={ this.asd }>修改redux数据</button>
      </div>
    )
  }
}