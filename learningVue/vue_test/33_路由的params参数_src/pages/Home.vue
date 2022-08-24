<template>
   <div>
    <h2>我是Home的内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>
        </li>
        <li>
          <!-- 路径太长的时候可以在index里配置好名字属性可以这样直接叫名字 -->
          <router-link class="list-group-item" active-class="active" :to="{name:'xiaoxi'}">Message</router-link>
        </li>
      </ul>
      <router-view>
      </router-view>
    </div>
  </div>
</template>

<script>
export default {
    name:'Home',
    beforeDestroy(){
      console.log('Home组件要被销毁掉啦')
    },
    mounted(){
      console.log('我是Home组件，我出现了',this)
      window.homeRoute = this.$route
      window.homeRouter = this.$router
    }
}
</script>
