import React from 'react';
// import { BrowserRouter as Router, Link } from 'react-router-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'; // 引入路由

import List from '../components/List'; // 组件Header
import Home from '../components/Home'; // 组件Home
import Header from '../components/Header'; // 组件Home
const router = () => (

  <BrowserRouter>
    <Switch>
      <Route path='/' exact component={ Home }></Route>
      {/* 获取URL参数 方法1 path='/list/:id' */}
      <Route path='/list/:id' exact component={ List }></Route>
      <Route path='/header' exact component={ Header }></Route>
      <Redirect to='/' />
    </Switch>
  </BrowserRouter>

)
export default router;