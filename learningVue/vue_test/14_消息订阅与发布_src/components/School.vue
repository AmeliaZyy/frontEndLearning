<template>
  <div class="school">
    <h2>学校名字：{{name}}</h2>
    <h2>学校地址：{{add}}</h2>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name:'School',
    data(){
        return{
          name:'海南大学',
          add:'海南岛-海口'
        }
    },
    methods:{
      // demo(msgName,data){
      //   console.log(`有人发布了${msgName}消息，${name}消息的回调执行了，我是订阅提示~`,data)
      // }
    },
    mounted(){
      // this.$bus.$on('hello',(data)=>{
      //   console.log('我是School组件，收到了数据',data)})
      this.pubId = pubsub.subscribe('hello',function(name,data){
        console.log(`有人发布了${name}消息，${name}消息的回调执行了，我是订阅提示~`,data)
        //${}还得结合反引号用啊兄弟
      })
      //以上这样写，里面的this是undefined，变成箭头函数this会变成vc的，或者也可以另写个方法demo，把demo放methods里

      // this.pubId = pubsub.subscribe('hello',this.demo)
      /*
      this.pubId = pubsub.subscribe('hello',(name,data)=>{
        console.log(`有人发布了${name}消息，${name}消息的回调执行了，我是订阅提示~`,data)
      })
      */
    },
    beforeDestroy(){
      // this.$bus.$off('hello')
      pubsub.unsubscribe(this.pubId)
    }

}
</script>

<style scoped>
  .school{
    background-color: orange;
    padding: 5px;
  }
</style>