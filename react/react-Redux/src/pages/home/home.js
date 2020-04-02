import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import store from '../../store'

export default class Home extends Component{
  constructor(props) {
    super(props);
    this.state = store.getState()
  }

  render() {
    return(
      <div className="App">
        hello my-react ==> home页面
        <div><Link to="/list">跳转到list页面</Link></div>
        <h2>{ this.state.str }</h2>
        <h2>{ this.state.fullName }</h2>
      </div>
    )
  }
}