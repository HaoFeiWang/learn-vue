/**
 * 脚手架配置
 */
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  //主文件配置
  // pages: {
  //   index: {
  //     // page 的入口
  //     entry: 'src/main.js'
  //   }
  // },

  //关闭lint
  lintOnSave: false,

  //配置代理服务器解决跨域问题，5000为实际服务器的端口号，代理服务器端口号和前端端口号一致
  //代理服务器会先访问 public 目录，如果 public 目录有对应资源则不会访问真实服务器
  //方式一
  // devServer: {
  //   proxy: 'http://localhost:5000'
  // }

  //方式二
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        pathRewrite:{'^/api':''},       //重写请求路径，将开头的api替换为空字符串，主要用户标识请求
        ws: true,                       //是否启用websocket，默认为true
        changeOrigin: true              //是否请求头host，，默认为true，则标识Host和真实服务器一致
      },
      '/foo': {
        target: 'http://localhost:5000',
        ws: true,
        changeOrigin: true
      }
    }
  }
})
