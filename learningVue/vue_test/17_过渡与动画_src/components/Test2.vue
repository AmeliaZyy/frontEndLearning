<template>
  <div>
    <button @click="isShow = !isShow">show/hide</button>
    <!-- :appear="true"可以直接写成appear -->
    <transition-group name="hello" :appear="true">
        <h1 v-show="!isShow" key="1">过渡实现动画效果</h1>
        <h1 v-show="isShow" key="2">希望我妈不要在旁边刷抖音</h1>
    </transition-group>
  </div>
</template>

<script>
export default {
    name:'Test2',
    data(){
        return{
            isShow:true
        }
    }
}
</script>

<style scoped>
    h1{
        background-image: linear-gradient(to right, #2371e3, #616df2, #9363fa, #c351fa, #f12bf2);
        /* transition: 0.5s linear; */
    }
    .hello-enter-active,.hello-leave-active{
        transition: 0.5s linear;
    }
    /* 进入的起点*/
    .hello-enter,.hello-leave-to{
        transform: translateX(-100%);
    }
    /* 进入的终点*/
    .hello-enter-to,.hello-leave{
        transform: translateX(0);
    }
</style>