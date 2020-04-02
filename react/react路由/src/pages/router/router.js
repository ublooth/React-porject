import React, { Component } from 'react'
import { Route, BrowserRouter, Redirect, Switch } from 'react-router-dom'  // 引入路由

// BrowserRouter 路由的大组件 > http://localhost:3001/  路径区别
// Route:组件的配置项 >> 
//     path      ：访问的路径
//     component ：对应的组件
//     exact     : 控制匹配的路由不会向下匹配，只支持对应的组件内容
// Redirect: 重定向
//     to  : 跳转到哪个组件
// Switch: 判断路由路径是否符合，符合跳转到指定路径，不符合重定向

import Index from '../index/App'
import Home from '../home/home'
import List from '../list/list'

class routerList extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={ Index }></Route>
            <Route path="/home" exact component={ Home }></Route>
            <Route path="/list" exact component={ List }></Route>
            <Redirect to='/' />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
  
}

export default routerList;