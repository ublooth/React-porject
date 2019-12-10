import React, { Component } from 'react';
import Header from '../components/Header'; // 组件Header
import Home from '../components/Home'; // 组件Home

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      homeLink: 'Home',
      appText: 'test',
      homeMounted: true
    }
  }

  onChangeLinkNmae(newName) { // 改变homeLink
    this.setState({
      homeLink: newName
    })
  }

  setAppText(val) {
    this.setState(() => {
      return {
        appText: val
      }
    })
  }

  // 子组件向父组件传值
  onGreet(age) { // age是子组件的数据
    alert(age);
  }

  changeHomeMounted() {
    this.setState({
      homeMounted: !this.state.homeMounted
    })
  }

  render() {
    const user = { // 父组件的数据
      name: "Anna",
      hobbies: ["Sports", "Reading"]
    };
    let homeComp = '';
    if (this.state.homeMounted) {
      homeComp = (
        <Home
          name={ "Max" }
          age={ 12 }
          user={ user }
          greet={ this.onGreet }
          changeLink={ this.onChangeLinkNmae.bind(this) }
          changeAppText= { this.setAppText.bind(this) }
        >
          <p>i am child</p> 
        </Home>
      )
    }
    return (
      <div>
        <Header homeLink={ this.state.homeLink }/>
        {/* header 的数据为 App 的state的homeLink */}
        <h1>hello !!</h1>
        <h2>{ this.state.appText }</h2>
        { homeComp }
        <hr />
        <button onClick={ this.changeHomeMounted.bind(this) } className="btn btn-primary">true/false</button>
      </div>
    );
  }
}