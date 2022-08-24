//关于求和的配置
export default{
    namespaced:true,
    actions:{
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
    },
    mutations:{
        ADD(state,value){
            console.log('我是mutation的add')
    
            state.sum += value
        },
        MINUS(state,value){
            console.log('我是mutation的minus')
    
            state.sum -= value
        },
        
    },
    state:{
        sum:0,//当前的和
        school:'尚硅谷',
        subject:'前端',
    },
    getters:{
        bigSum(state){
            return state.sum*10
        }
    }
}