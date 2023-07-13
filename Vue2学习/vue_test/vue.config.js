const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  //配置代理服务器（方法一只能配置单个代理服务器）
  /* devServer: {
    //端口号默认是本机端口号，现在写的端口号是找哪个端口号要数据
    proxy: 'http://localhost:5000',
  }, */
  devServer: {
    proxy: {
      '/students': {
        //需要在端口号后面加
        target: 'http://localhost:5000',
        ws: true,
        pathRewrite: {'/students': ''}, //将/students 替换成''
        changeOrigin: true,
        //changeOrigin：true 他发送过去的请求端口号就是http://localhost:5000
        //changeOrigin：false 他发送过去的请求端口号就是http://localhost:8080
      },
      '/cars': {
        target: 'http://localhost:5001',
        pathRewrite: {'/cars': ''},
      },
    },
  },
})
