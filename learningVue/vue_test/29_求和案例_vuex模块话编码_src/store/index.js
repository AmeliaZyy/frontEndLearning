//该文件用于创建Vuex中最为核心的store

//这三行放这里是因为在main里总是先运行import store再运行vuex会报错，所以在这里引入使用vuex可以避免这个问题，那我们就要再Vue.use之前再引入vue。
import Vue from 'vue'
//引入vuex
import Vuex from 'vuex'

import countOptions from './count'
import personOptions from './person'

//这个是vuex可以让vmvc有个$store
Vue.use(Vuex)





//创建并暴露store
export default new Vuex.Store({
    modules:{
        countAbout:countOptions,
        personAbout:personOptions
    }
})

//导出store
// export default store