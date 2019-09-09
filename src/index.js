// 入口文件
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; // 导入组件
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root')); // <App />:组件，第4行引入的，挂载在#root

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
