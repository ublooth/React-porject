import React,{ Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Header from './components/Header'; // 组件Header
import Home from './components/Home'; // 组件Home

class App extends Component {
  constructor() { // 首先执行初始化函数(构造方法)
    super(); //必须先调用 super()
    this.state = {
      homeLink:"HeaderHome"
    }
  }
  onGreet(age) {
    alert(age)
  }

  onChangeLinkName(newName) {
    this.setState({
      homeLink: newName
    })
  }

  render() {// 一个组件类必须要实现一个 render 方法，这个 render 方法必须要返回一个 JSX 元素。
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
            <Header homeLink={this.state.homeLink}/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
            <h1>Hell World !!</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
            <Home
             name={'Max'}
             initialAge={12}
             user={user}
             greet={this.onGreet}
             changeLink={this.onChangeLinkName.bind(this)}/>
          </div>
        </div>
        <p>兄弟组件通过父组件传递数据</p>
        <p>Home子组件点击按钮触发事件改变Home父组件传递的changeLink的数据，changeLink会触发App总父组件的onChangeLinkName事件改变homeLink的数据，根据setState的返回值改变Header组件的数据</p>
      </div>
    );
  }
}

export default App;
