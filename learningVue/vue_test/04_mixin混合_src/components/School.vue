<template>
  <div>
    <h2 @click="showName">学校名字：{{name}}</h2>
    <h2>学校地址：{{add}}</h2>
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
    // mixins:[mix,mix2]
}
</script>
