import React from 'react';
import ReactDOM from 'react-dom';
import Router from './pages/router/router';
import './overall/rem'; // 自适应
import 'antd-mobile/dist/antd-mobile.css';  // or 'antd-mobile/dist/antd-mobile.less'

ReactDOM.render(<Router />, document.getElementById('root')); // 渲染组件
