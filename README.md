This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

### 跨域请求

#### 第一步 安装 http-proxy-middleware
npm install http-proxy-middleware
我们这里面请求用的axios，在将axios安装一下
npm install axios
##### 第二步 src下创建一个 setupProxy.js文件
```
const proxy = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    proxy('/v1', {  //是需要转发的请求
      target: 'http://cangdu.org:8001',  // 这里是接口服务器地址
      changeOrigin: true,
      secure: false,
      pathRewrite: {
        "^/commonredirect": "/"
      },
    })
  )
};
```
#### 第三步 需要发送请求的地方 使用
```
class App extends Component{
  constructor(props) {
    super(props);
    this.state = {}
  }
  componentDidMount() {
    this.getSliderList();
  }
  getSliderList(){
    axios({
      method: "GET",
      url: `/v1/cities?type=hot`,
    })
      .then((res) => {
        console.log('请求返回的数据');
        console.log(res.data)//此接口返回数据为jsonp格式，须进一步对数据进行处理
      });
  }
  render() {
    return (
      <div className="App">
        123123
      </div>
    );
  }
}
```
#### 注意axios get 请求参数
```
import axios from 'axios';

axios.interceptors.response.use(response => { // 请求正确
  if (response.status === 200 && response.data) {
    // console.log('response', response)
    return response;
  } else {
    console.log('response.data.message', response.data)
    return response
  }
}, error => { // 错误
  const response = error.response
  if (response.status === 401) {
    console.log('401')
  } else {
    console.log('else 401')
  }
  return Promise.resolve(error.response); // 转为 Promise 对象 
})

// 解决http请求的缓存问题,加一个时间戳
let date = new Date();
let timer = date.getTime().toString();

// function post(method, url, obj) {
//   obj.t = timer;
//   return axios({
//     method: method,
//     url: url,
//     data: obj,
//     headers: {
//       'X-Requested-With': 'XMLHttpRequest',
//       'Content-Type': 'application/json',
//     }
//   })
// }
function get(method, url, params) {
  params.t = timer;
  return axios({
    method: method,
    url: url,
    params, ////  get请求参数
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/json',
    }
  })
}

// 热门城市列表
export const getPopCityList = (obj) => get('get', '/v1/cities', obj)

// 所有城市
export const getAllCityList = (obj) => get('get', '/v1/cities', obj)

```

### 路由命令： cnpm install react-router-dom --save

### 修改端口号
```
 // 在node_modules文件夹里的可以看到react-scripts文件夹，在start.js里可以找到修改端口的代码

// Tools like Cloud9 rely on this.
const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 3000; // 3000端口号
const HOST = process.env.HOST || '0.0.0.0';
```
### 使用scss
```
npm add node-sass --save-dev
npm install node-sass

npm audit fix // 修复提示漏洞
```
### 安装手机端UI库
https://mobile.ant.design/docs/react/introduce-cn
```
npm install antd-mobile --save
```