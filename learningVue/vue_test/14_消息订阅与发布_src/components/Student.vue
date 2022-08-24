<template>
  <div class="stu">
    <h2>学生姓名：{{name}}</h2>
    <h2>学生性别：{{gen}}</h2>
    <button @click="sendStuName">把学生名给school组件</button>

  </div>
</template>

<script>
import pubsub from 'pubsub-js'

export default {
    name:'Student',
    data(){
        return{
            name:'AmeliaZ',
            gen:'female',
            x:666
        }
    },
    methods:{
      sendStuName(){
        // this.$bus.$emit('hello',this.name)
        pubsub.publish('hello',666)
      }
    }
    
}
</script>


<style lang="less" scoped>
  .stu{
    background-color: skyblue;
    padding: 5px;
    margin-top: 30px;
  }
</style>