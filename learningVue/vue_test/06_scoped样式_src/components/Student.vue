<template>
  <div class="demo">
    <h2>学生姓名：{{name}}</h2>
    <h2 class="qwe">学生性别：{{gen}}</h2>
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


<style lang="less" scoped>
  .demo{
    background-color: skyblue;
    .qwe{
      font-size: 40px;
    }
  }
</style>