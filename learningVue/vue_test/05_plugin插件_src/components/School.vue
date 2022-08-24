<template>
  <div>
    <h2>学校名字：{{name | mySlice}}</h2>
    <h2>学校地址：{{add}}</h2>
    <button @click="test">点我测试hello</button>
  </div>
</template>

<script>
// import {mix,mix2} from '../mixin'
export default {
    name:'School',
    data(){
        return{
          name:'海南大学',
          add:'海南岛-海口'
        }
    },
    methods:{
      test(){
        this.hello()
      }
    }
    // mixins:[mix,mix2]
}
</script>
