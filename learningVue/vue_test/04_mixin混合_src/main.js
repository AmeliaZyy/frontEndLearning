import Vue from 'vue'
import App from './App.vue'

//引入混合
import {mix,mix2} from './mixin'
Vue.config.productionTip = false


//全局调用
Vue.mixin(mix)
Vue.mixin(mix2)

new Vue({
    el:'#app',
    render: h => h (App)
})