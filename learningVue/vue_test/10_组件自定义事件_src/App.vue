<template>
  <div class="outer">
    <h1>{{msg}} beautiful {{studentName}}</h1>
    <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
    <!-- 如果不给@click加上native，它以为你在传事件，嘛实际上你是自己原生的 -->
    <School :getSchoolName="getSchoolName" @click.native="test" />
    <hr>
    <!-- 通过父组件给子组件绑定自定义事件实现：子给父传递数据 -->
    <Student v-on:diyevent="getStudentName"/>
    <Student @diyevent.once="getStudentName" @demo="m1" />
    <!-- 上面是第一种方法：使用v-on：或@ ，结合methods-->
    <!-- 下面是第二种方法：使用ref，结合mounted -->
    <Student ref="student"/>


  </div>
</template>

<script>
import School from './components/School'
import Student from './components/Student'

export default {
  name:'App',
  components: { School,Student},
  data(){
    return{
      msg:'NiHaoMua?',
      studentName:''
    }
  },
  methods:{
    getSchoolName(name){
      console.log("App收到了学校名：",name)
    },
    getStudentName(name,...params){
      console.log("App收到了学生名：",name,params)
      this.studentName = name
    },
    m1(){
      console.log("m1事件被触发了")
    },
    test(){
      console.log(123123321321)
    }
  },
  mounted(){
    // setTimeout(()=>{
    //   this.$refs.student.$on('diyevent',this.getStudentName)
    // },3000)
    
    // this.$refs.student.$once('diyevent',this.getStudentName)//一次性

    //可以写成
    this.$refs.student.$on('diyevent',(name,...params)=>{
      console.log("App收到了学生名：",name,params)
      console.log(this)//非箭头函数时，this是组件Student，加箭头函数时，this是App的。此时向外到了app的mounted
      this.studentName = name
    })
  }
}
</script>

<style scoped>
  .outer{
    background-color: gray;
    padding: 5px;
  }
</style>