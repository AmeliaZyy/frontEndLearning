<template>
  <div>
    <h2 @click="showName">学生姓名：{{name}}</h2>
    <h2>学生性别：{{gen}}</h2>
  </div>
</template>

<script>
//局部引入混合，全局引入，可以在main.js里写另外的
// import {mix} from '../mixin'
export default {
    name:'Student',
    data(){
        return{
            name:'AmeliaZ',
            gen:'female',
            x:666
        }
    },
    // mixins:[mix],
    mounted(){
        console.log('我是student里的mounted，你差点把我括号忘了')
    }
}
</script>
