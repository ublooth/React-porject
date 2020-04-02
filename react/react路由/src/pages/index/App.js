import React from 'react';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      hello my-react
      <ul>
        <li><Link to='/home'>跳转到home页面</Link></li>
        <li><Link to='/list'>跳转到list页面</Link></li>
      </ul>
    </div>
  );
}

export default App;
