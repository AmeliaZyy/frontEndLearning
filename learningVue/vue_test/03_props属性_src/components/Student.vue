<template>
  <div>
    <h1>{{msg}}</h1>
    <h2>学生姓名：{{name}}</h2>
    <h2>学生性别：{{gen}}</h2>
    <h2>学生年龄：{{myAge+1}}</h2>
    <button @click="updateAge">尝试修改收到的年龄</button>
  </div>
</template>

<script>
export default {
    name:'Student',
    data(){
        return{
            msg:'我是一个学生',
            myAge:this.age
        }
    },
    // age在props里修改会报错，名字冲突的话props优先，所以可以这样引用再拿去改
    methods:{
        updateAge(){
            this.myAge++
        }
    },
    // props:['name','gen','age']//简单声明接收

    //接收的同时对数据进行类型限制
    /*
    props:{
        name:String,
        age:Number,
        gen:String
    }
    */

    //接收的同时对数据进行类型限制+必要性限制+如果不传设置默认值
    props:{
        name:{
            type:String,
            required:true
        },
        age:{
            type:Number,
            default:99
        },
        gen:{
            type:String,
            required:true
        }
    }
}
</script>
