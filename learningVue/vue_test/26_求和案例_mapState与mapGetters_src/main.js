
import Vue from 'vue'
import App from './App.vue'
//这个插件是替代ajax搞全局总线让vmvc里有个$http的玩意
import VueResource from 'vue-resource'

import store from './store/index'

Vue.config.productionTip = false

Vue.use(VueResource)


new Vue({
    el:'#app',
    render: h => h (App),
    store,
    beforeCreate(){
        Vue.prototype.$bus = this
    }
})