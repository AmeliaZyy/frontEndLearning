<template>
  <div class="outer">
    <h1>{{msg}}{{name}}</h1>
    <button @click="showName">show name</button>
    <School/>
    <Student/>

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
      name:''
    }
  },
  methods:{
    showName(){
      console.log("点击事件先运行了，打开了门，等数据来就会显示")
      this.$bus.$on('hello',(data)=>{
        console.log('我是App组件，收到了数据',data)
        this.name = data
      })
    }
  }
  
}
</script>

<style scoped>
  .outer{
    background-color: gray;
    padding: 5px;
  }
</style>