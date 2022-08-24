<template>
   <div>
    <h2>我是Home的内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>
        </li>
        <li>
          <!-- 加上replace属性之后浏览器的历史记录模式就是替换掉上条历史记录而不是可以后退回上条记录-->
          <router-link class="list-group-item" active-class="active" replace :to="{name:'xiaoxi'}">Message</router-link>
        </li>
      </ul>
      <!--include的值代表要缓存的组件，比如下面代表在Home组件中要缓存News组件(组件名)-->
      <!--如果要缓存多个路由组件就改写为:include="['News', 'Message']"-->
      <keep-alive include="News">
        <router-view>
        </router-view>
      </keep-alive>
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
      // window.homeRoute = this.$route
      // window.homeRouter = this.$router
    }
}
</script>
