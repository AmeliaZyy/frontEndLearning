//该文件用于创建Vuex中最为核心的store

//这三行放这里是因为在main里总是先运行import store再运行vuex会报错，所以在这里引入使用vuex可以避免这个问题，那我们就要再Vue.use之前再引入vue。
import Vue from 'vue'
//引入vuex
import Vuex from 'vuex'
//这个是vuex可以让vmvc有个$store
Vue.use(Vuex)

//准备actons--用于相应组件中的动作
const actions = {
    // add:function(context,value){//可以简写成add(){}
    //     context.commit('ADD',value)
    // },
    // minus(context,value){
    //     context.commit('MINUS',value)
    // },
    //上面这两个没做啥多的业务逻辑可以跳过actions
    //多的业务逻辑最好是交给actions，尽量别让mutations做太多麻烦事儿
    addOdd(context,value){
        if(context.state.sum % 2){
            console.log('我是action的addOdd')
            context.commit('ADD',value)
        }
    },
    addWait(context,value){
        setTimeout(()=>{
            console.log('我是action的addWait')

            context.commit('ADD',value)
          },1000)
        
    }
}

//准备mutations--用于操作数据（state）
const mutations = {
    ADD(state,value){
        console.log('我是mutation的add')

        state.sum += value
    },
    MINUS(state,value){
        console.log('我是mutation的minus')

        state.sum -= value
    },
    // ADDODD(state,value){
    //     console.log('我是mutation的addOdd')
    //     state.sum += value
    // },
    // ADDWAIT(state,value){
    //     console.log('我是mutation的addWait')
    //     state.sum += value
    // }

}

//准备state--用于存储数据
const state = {
    sum:0//当前的和
}

//准备getters -- 用于将state数据进行加工
const getters = {
    bigSum(state){
        return state.sum*10
    }
}

//创建并暴露store
export default new Vuex.Store({
    actions:actions,
    mutations,
    state,
    getters
})

//导出store
// export default store