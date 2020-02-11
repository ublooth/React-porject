import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../style/base.scss'
import './App.scss'

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <div className="head">字体</div>
        
          
        <Link to='/city'>123123</Link>
        
        
      </div>
    );
  }
}

export default App;
