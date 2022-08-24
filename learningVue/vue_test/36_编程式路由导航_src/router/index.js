//该为文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'

//引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

//创建并暴露一个路由器
export default new VueRouter({
    routes:[
        {
            path:'/about',
            component:About
        },
        {
            path:'/home',
            component:Home,
            children:[{
                path:'news',
                component:News
            },
            {
                name:'xiaoxi',
                path:'message',
                component:Message,
                children:[{
                    name:'informations',
                    path:'detail/:id/:title',
                    component:Detail,
                    //props的第一种写法值为对象,该对象的所有key-value都会以props的形式传给detail组件(死数据)
                    // props:{
                    //     a:1,
                    //     b:'hello'
                    // }
                    //props的第二种写法，值为布尔值,布尔值为真，就会把该路由组件收到的所有params(注意如果是query参数不会奏效的)参数以props的形式传递给detail组件
                    // props: true
                    //props的第三种写法,值为函数 配合query使用 $route.query.id
                    props({ query: { id, title } }){
                    return {
                        id,
                        title
                    }
                }
                }]
            }]
        }
    ]
})

