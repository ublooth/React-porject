import React from 'react';
import { Link } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      hello my-react ==> home页面
      <div><Link to="/list">跳转到list页面</Link></div>
    </div>
  );
}

export default App;
