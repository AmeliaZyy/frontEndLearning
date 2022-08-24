<template>
  <div class="demo">
    <h2>学校名字：{{name}}</h2>
    <h2>学校地址：{{add}}</h2>
  </div>
</template>

<script>
export default {
    name:'School',
    data(){
        return{
          name:'海南大学',
          add:'海南岛-海口'
        }
    },
}
</script>

<style scoped>
  .demo{
    background-color: orange;
  }
</style>