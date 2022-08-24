<template>
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <button @click="showDOM" ref="but">点我输出上方DOM元素</button>
    <School ref="sch"/>
  </div>
</template>

<script>
import School from './components/School'
export default {
  name: 'App',
  data(){
    return{
      msg:'欢迎报考夏日游泳大学'
    }
  },
  components: {
    School
  },
  methods:{
    showDOM(){
      console.log(this.$refs)
      console.log(this.$refs.but)//真实dom元素
      console.log(this.$refs.title)//真实dom元素
      console.log(this.$refs.sch)//school组件的实例对象

    }
  }
}
</script>

