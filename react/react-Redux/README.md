# react 脚手架安装

1》windows
    安装：nodejs
          npm
          git

2》mac
    安装：nodejs
          npm

注意版本： 
Node >= 8.10 和 npm >= 5.6
二，安装操作
1.创建新的 React 应用
https://zh-hans.reactjs.org/docs/create-a-new-react-app.html
要创建项目，请执行：
```
// 1. 安装react项目：
      npx create-react-app [项目目录名称]
// 2. 进入项目：
      cd [项目目录名称]
// 3. 启动项目：
      npm start
```
##注意
第一行的 npx 不是拼写错误 —— 它是 npm 5.2+ 附带的 package 运行工具。

## React 目录结构详解

倒叙：
1. README.md => 项目注释文件 说明文件
2. package.json => node文件：项目信息，项目运行
3. package-lock.json => 依赖包
4. .gitignore => 无法上传到仓库上的文件，
5. src => 编写代码
6. public/favicon.ico => 网页图标
7. public/index.html => 首先打开的页面

首先打开 public/index.html 再引入src/index.js > app.js

## 修改端口号
```
 // 在node_modules文件夹里的可以看到react-scripts文件夹，在start.js里可以找到修改端口的代码

// Tools like Cloud9 rely on this.
const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 3000; // 3000端口号
const HOST = process.env.HOST || '0.0.0.0';
```

## 路由命令：
``` 
npm install react-router-dom --save
```

## redux
### 状态管理：Redux 是 JavaScript 状态容器，提供可预测化的状态管理

### redux在什么时候使用
1. 组件传值比较复杂的情况下
2. 共享数据

### 安装
#### 安装稳定版：
```
npm install --save redux
```
以上基于使用 npm 来做包管理工具的情况下。
### 要点
应用中所有的 state 都以一个对象树的形式储存在一个** 单一的 store  **中。 ** 惟一改变 state 的办法是触发 action **，一个描述发生什么的对象。 为了描述 action 如何改变 state 树，你需要编写 reducers。

### 操作
操作redux一般会在src目录创建一个store目录
```
  src
    |store
          |index.js
```
### 组件中使用store中的数据
1. 引入文件 ==> store/index.js
2. store.getState(); ==> store数据

