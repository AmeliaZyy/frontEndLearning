import axios from "axios"
import {nanoid} from 'nanoid'
export default {
    namespaced:true,
    actions:{
        addPersonWang(context,value){
            //of的O要大写啊啊啊
            if(value.name.indexOf('王') === 0){
                context.commit('ADD_PERSON',value)
            }else{
                alert('点这个按键就只能添加姓王的人名哦')
            }
        },
        addPersonServer(context){
            axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
                res =>{
                    context.commit('ADD_PERSON',{id:nanoid(),name:res.data})
                },
                err =>{
                    alert(err.message)
                }
            )
        }
    },
    mutations:{
        ADD_PERSON(state,value){
            console.log('mutations中的ADD_PERSON被调用了')
            state.personList.unshift(value)
        }
    },
    state:{
        personList:[
            {id:'001',name:'张三'}
        ]
    },
    getters:{
        firstPersonName(state){
            return state.personList[0].name
        }
    }
}