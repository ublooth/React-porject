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
  );
  app.use(
    proxy('/v2', {  //是需要转发的请求
      target: 'http://cangdu.org:8001',  // 这里是接口服务器地址
      changeOrigin: true,
      secure: false,
      pathRewrite: {
        "^/commonredirect": "/"
      },
    })
  );
  app.use(
    proxy('/shopping', {  //是需要转发的请求
      target: 'http://cangdu.org:8001',  // 这里是接口服务器地址
      changeOrigin: true,
      secure: false,
      pathRewrite: {
        "^/commonredirect": "/"
      },
    })
  );
  app.use(
    proxy('/img', {  //是需要转发的请求
      target: 'http://cangdu.org:8001',  // 这里是接口服务器地址
      changeOrigin: true,
      secure: false,
      pathRewrite: {
        "^/commonredirect": "/"
      },
    })
  );
};
console.log("process.env.NODE_ENV1", process.env.NODE_ENV)