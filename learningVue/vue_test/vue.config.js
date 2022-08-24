const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,  //关闭语法检查

  devServer:{
    port:8080,
    proxy:{
      '/api': {
        target:"http://localhost:5000",
        pathRewrite:{
          "^/api":""
        }
      }
    }
  }
})

//如果跨域了，可以在这个文件里写上跨域了的服务器端口名称，然后把用的地方的端口换成和用的地方一样的端口就ok

