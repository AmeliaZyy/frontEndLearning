// 该文件是整个项目的入口文件
// 引入Vue
import Vue from 'vue'
// 引入App组件，是所有组件的父组件
import App from './App.vue'
// 关闭vue的生产提示
Vue.config.productionTip = false
//创建Vue实例对象
new Vue({
  //把App组件放进容器
  render: h => h(App),

  // render(createElement){
  //   return createElement('h1','nihaomua')
  // }
  //h就是这个创建元素这个方法参数，里面再两个参数一个是元素一个是内容，只传一个app就是组件儿 所以反正不用this 可以用箭头函数简写
}).$mount('#app')//这个就算el:'#App'
