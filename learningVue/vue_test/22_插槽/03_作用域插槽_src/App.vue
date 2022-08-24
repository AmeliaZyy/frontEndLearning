<template>
  <div class="container">
    <Category title="游戏">
      <template scope="received">
        <ul>
          <li v-for="(game, index) in received.games" :key="index">{{ game }}</li>
        </ul>
      </template>
    </Category>

    <Category title="游戏">
      <!-- 这里scope的{}里面的名字，应该和另一个组件给本组件绑定的名字一致（而不是另组件数据名字） -->
      <!-- 解构赋值 -->
      <template scope="{games}">
        <ol>
          <li v-for="(game, index) in games" :key="index">{{ game }}</li>
        </ol>
      </template>
    </Category>

    <Category title="游戏">
      <template slot-scope="{games}">
          <h4 v-for="(game, index) in games" :key="index">{{ game }}</h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category";
export default {
  name: "App",
  components: { Category },
  methods: {},
};
</script>

<style lang="css">
.container,
.foot {
  display: flex;
  justify-content: space-around;
}
</style>

