import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import Header from './components/Header'; // 组件Header
import Home from './components/Home'; // 组件Home

function App() {
  const user = {
    name: 'Anna',
    hobbies: ['Sports','Reading']
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-1 col-xs-offset-11">
          <Header />
        </div>
      </div>
      <div className="row">
        <div className="col-xs-1 col-xs-offset-11">
          <h1>Hell World !!</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-1 col-xs-offset-11">
          <Home name={'Max'} initialAge={12} user={ user }>
            <p>父元素Home的子节点,使用this.props.children输出</p>
          </Home>
          {/*  name={'Max'} initialAge={12} user={user} 传递数据 */}
        </div>
      </div>
    </div>
  );
}

export default App;
