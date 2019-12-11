import React, { Component } from 'react';

// import { HashRouter, Route } from 'react-router-dom'; // 引入路由
// HashRouter 路由的大组件 > http://localhost:3000/#/   路径区别

import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'; // 引入路由
// BrowserRouter 路由的大组件 > http://localhost:3000/  路径区别
// Route:组件的配置项 >> 
//     path      ：访问的路径
//     component ：对应的组件
//     exact     : 控制匹配的路由不会向下匹配，只支持对应的组件内容
// Redirect: 重定向
//     to  : 跳转到哪个组件
// Switch: 判断路由路径是否符合，符合跳转到指定路径，不符合重定向



import List from '../components/List'; // 组件Header
import Home from '../components/Home'; // 组件Home

class App extends Component {
  render() {
    return (
      <div>
        {/* <HashRouter>
          <div>
            <Route path='/' component={ Home }></Route>
            <Route path='/list' component={ List }></Route>
          </div>
        </HashRouter> */}
        <BrowserRouter>
          <Switch>
            <Route path='/' exact component={ Home }></Route>
            <Route path='/list' exact component={ List }></Route>
            <Redirect to='/' />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;