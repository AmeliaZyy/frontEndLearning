<template>
  <div>
    <h2>学生姓名：{{name}}</h2>
    <h2>学生性别：{{gen}}</h2>
    <input type="text" v-fbind:value='name'>
  </div>
</template>

<script>
export default {
    name:'Student',
    data(){
        return{
            name:'AmeliaZ',
            gen:'female',
            x:666
        }
    },
    
}
</script>
