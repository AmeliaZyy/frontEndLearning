<template>
  <div class="school">
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
    mounted(){
      this.$bus.$on('hello',(data)=>{
        console.log('我是School组件，收到了数据',data)})
    },
    beforeDestroy(){
      this.$bus.$off('hello')
    }

}
</script>

<style scoped>
  .school{
    background-color: orange;
    padding: 5px;
  }
</style>