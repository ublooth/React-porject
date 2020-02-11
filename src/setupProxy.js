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