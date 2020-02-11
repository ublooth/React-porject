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