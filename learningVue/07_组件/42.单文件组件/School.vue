
<template>
  <div class="demo">
    <h2>你在{{ schoolName }}上学</h2>
    <h2>想在{{ address }}生活</h2>
    <button @click="showName">点我提示学校名</button>
    <button @click="changeCity">点我切换城市</button>
  </div>
</template>


<script>
//组件交互相关代码 这个默认暴露import的时候比较简单
    export default {
        name:'School',
        data() {
            return {
            schoolName: "一中",
            address: "成都",
            };
        },
        methods: {
            showName() {
            alert(this.schoolName);
            },
            changeCity() {
            this.address = "深圳";
            },
        },
    };
</script>


<style>
/* 组件的样式 */
    .demo {
        background-color: orange;
    }
</style>