//该为文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'

//引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

//创建并暴露一个路由器
const router = new VueRouter({
    mode:'hash',
    routes:[
        {
            name:'regard',
            path:'/about',
            component:About,
            meta:{
                isAuth: true,
                title: '关于'
            },
        },
        {
            name:'homepage',
            path:'/home',
            component:Home,
            children:[{
                path:'news',
                component:News,
                //meta:路由元信息，可以配置是否需要校验的信息
                meta:{
                    isAuth: true,
                    title: '新闻'
                },
                //独享路由守卫
                // beforeEnter(to,from,next){
                //     const {isAuth} = to.meta;
                //     if(isAuth){
                //         //代表需要鉴权
                //         if(localStorage.getItem('username') === 'zyy') next();//类似于nodejs中间件
                //         else alert('无权限');
                //     }else{
                //         next();
                //     }
                // }
            },
            {
                name:'xiaoxi',
                path:'message',
                component:Message,
                children:[{
                    name:'informations',
                    path:'detail',
                    component:Detail,
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

//全局前置路由守卫
//初始化和在每一次路由切换之前被调用
// router.beforeEach((to, from, next) => {
//     // console.log(to, from);
//     console.log('前置路由守卫');
//     const { isAuth } = to.meta;//这样写节等于 const isAuth = to.meta,isAuth
//     if(isAuth){
//         //代表需要鉴权
//         if(localStorage.getItem('username') === 'zyy') next();//类似于nodejs中间件
//         else alert('无权限');
//     }else{
//         next();
//     }
// });

//全局后置路由守卫
//初始化和在每一次路由切换之后被调用
// router.afterEach(( to, from ) => {
//     console.log('后置路由守卫', to, from);
//     //点击每一个路由都切换西夏document.title
//     const { title } = to.meta;
//     document.title = title || 'vue-advance';
// })

export default router;