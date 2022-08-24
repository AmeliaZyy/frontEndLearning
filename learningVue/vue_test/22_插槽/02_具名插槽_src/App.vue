<template>
  <div class="container">
    <!-- <Category title="美食" :listData="foods"> -->
    <Category title="美食">
      <img src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="" slot="center"/>
      <a href="https://www.bilibili.com" slot="footer">更多美食</a>
    </Category>

    <Category title="游戏">
      <ul slot="center">
        <li v-for="(game, index) in games" :key="index">{{ game}}</li>
      </ul>
      <div class="foot" slot="footer">
        <a href="https://www.bilibili.com">单机游戏</a>
        <a href="https://www.bilibili.com">网络游戏</a>
      </div>
    </Category>

    <Category title="电影">
      <video slot="center" controls src="http://clips.vorwaerts-gmbh.de/big_duck_bunny.mp4"></video>
      <!-- 这样写template可以把div和h4包裹在一起。此时slot绑定名字的写法也可以如下写在temp里 -->
      <template v-slot:footer>
        <div class="foot">
          <a href="https://www.bilibili.com">经典</a>
          <a href="https://www.bilibili.com">热门</a>
          <a href="https://www.bilibili.com">推荐</a>
        </div>
        <h4>欢迎前来观影</h4>
      </template>
    </Category>
    <!-- 加冒号，传的是js表达式，不加传的是字符串 -->
  </div>
</template>

<script>
import Category from "./components/Category";
export default {
  name: "App",
  components: { Category },
  data() {
    return {
      foods: ["火锅", "海鲜", "烧烤", "西餐"],
      games: ["红色警戒", "英雄联盟", "超级玛丽", "穿越火线"],
      films: ["《绿皮书》", "《实习生》", "《超人归来》", "《复仇者联盟》"],
    };
  },
  methods: {},
};
</script>

<style lang="css">
.container,.foot{
  display: flex;
  justify-content: space-around;
}
img{
  width: 100%;
}
video{
  width: 100%;
}
h4{
  text-align: center;
}
</style>

