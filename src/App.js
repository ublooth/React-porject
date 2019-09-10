import React,{ Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Header from './components/Header'; // 组件Header
import Home from './components/Home'; // 组件Home

class App extends Component {
  constructor() { // 首先执行初始化函数(构造方法)
    super(); //必须先调用 super()
    this.state = {
      homeLink:"HeaderHome",
      homeMounted: true 
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

  onChangeHomeMounted() {
    this.setState({
      homeMounted: !this.state.homeMounted //取反
    })
  }
  render() {// 一个组件类必须要实现一个 render 方法，这个 render 方法必须要返回一个 JSX 元素。
    let homeCmp = '';
    if(this.state.homeMounted) {
      homeCmp = (
        <Home
          name={'Max'}
          initialAge={12}
          greet={this.onGreet}
          changeLink={this.onChangeLinkName.bind(this)}
          initialName={this.state.homeLink}
        />
      );
    }
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
            {homeCmp}
          </div>
        </div>
        <hr/>
        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
            <button
             className="btn btn-primary"
             onClick={() => this.onChangeHomeMounted()}
             >Home组件移出/入DOM</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
