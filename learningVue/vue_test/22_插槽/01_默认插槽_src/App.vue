<template>
  <div class="container">
    <!-- <Category title="美食" :listData="foods"> -->
    <Category title="美食">
      <img src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="" />
    </Category>

    <Category title="游戏">
      <ul>
        <li v-for="(game, index) in games" :key="index">{{ game}}</li>
      </ul>
    </Category>

    <Category title="电影">
      <video controls src="http://clips.vorwaerts-gmbh.de/big_duck_bunny.mp4"></video>
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
.container {
  display: flex;
  justify-content: space-around;
}
img{
  width: 100%;
}
video{
  width: 100%;
}
</style>

