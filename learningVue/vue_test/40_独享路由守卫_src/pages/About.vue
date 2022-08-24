<template>
  <h2>我是About的内容</h2>
</template>

<script>
export default {
    name:'About',
    beforeDestroy(){
      console.log('About组件要被销毁掉啦')
    },
    mounted(){
      console.log('我是About组件，我出现了',this)
      window.homeRoute = this.$route
      window.homeRouter = this.$router
    }
}
</script>

