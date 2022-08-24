<template>
  <div class="stu">
    <h2>学生姓名：{{name}}</h2>
    <h2>学生性别：{{gen}}</h2>
    <h2>学生学号：{{x}}</h2>
    <button @click="add">学号变大</button>
    <button @click="sendStuName">把学生名字给App</button>
    <button @click="unbind">解绑自定义事件</button>
    <button @click="death">销毁当前Student组件的实例（vc）</button>



  </div>
</template>

<script>
export default {
    name:'Student',
    data(){
        return{
            name:'AmeliaZ',
            gen:'female',
            x:666
        }
    },
    methods:{
      add(){
        console.log("add回调被调用了");
        this.x++
      },
      sendStuName(){
        //触发App给绑定在Student组件身上的diyevent事件
        this.$emit('diyevent',this.name)
        // this.$emit('demo')
      },
      unbind(){
        this.$off('diyevent')//解绑一个自定义事件
        // this.$off(['diyevent','demo'])//解绑多个自定义事件
        // this.$off()//解绑所有自定义事件
      },
      death(){
        this.$destroy()//销毁了当前组件实例 销毁后所有此实例自定义事件都不能用了
      }
    }
    
}
</script>


<style lang="less" scoped>
  .stu{
    background-color: skyblue;
    padding: 5px;
    margin-top: 30px;
  }
</style>