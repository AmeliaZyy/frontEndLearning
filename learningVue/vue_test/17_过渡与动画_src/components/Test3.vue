<template>
  <div>
    <button @click="isShow = !isShow">show/hide</button>
    <!-- :appear="true"可以直接写成appear -->
    <transition-group
      appear
      name="animate__animated animate__bounce"
      enter-active-class="animate__swing"
      leave-active-class="animate__backOutUp"
    >
      <h1 v-show="!isShow" key="1">用三方库实现动画效果</h1>
      <h1 v-show="isShow" key="2">用三方库实现动画效果</h1>
    </transition-group>
  </div>
</template>

<script>
import "animate.css";
export default {
  name: "Test3",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
h1 {
  background-image: linear-gradient(
    to right,
    #d3e323,
    #f0ba00,
    #ff8e13,
    #ff5f39,
    #f22b57
  );
  /* transition: 0.5s linear; */
}
</style>