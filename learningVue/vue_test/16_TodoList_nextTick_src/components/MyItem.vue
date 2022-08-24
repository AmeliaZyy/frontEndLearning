<template>
  <li>
    <label>
      <!--      这里勾选和取消勾选可以使用change和click作为事件处理-->
      <input
        type="checkbox"
        :checked="todo.done"
        @change="handleCheck(todo.id)"
      />
      <!--v-model数据的双向绑定，checkbox使用v-model来双向绑定其是否被勾选,也可以实现效果但不推荐(因为其实修改了props中的数据)-->
      <!--这里修改了从List修改过来的props,这里的不允许改是浅层次，就是如果props是一个对象则这个修改这个对象的某一个属性vue是放行的-->
      <!-- <input type="checkbox" v-model="todo.done"/>-->
      <span v-show="!todo.isEdit">{{ todo.title }}</span>
      <input
        type="text"
        v-show="todo.isEdit"
        :value="todo.title"
        @blur="handleBlur(todo, $event)"
        ref="inputTitle"
      />
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
    <button
      class="btn btn-edit"
      @click="handleEdit(todo)"
      v-show="!todo.isEdit"
    >
      编辑
    </button>
  </li>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "MyItem",
  //声明接收todo
  props: ["todo"],
  methods: {
    handleCheck(id) {
      // this.checkTodo(id);
      this.$bus.$emit("checkTodo", id);
    },
    handleDelete(id) {
      if (confirm(`确定删除编号为${id}的todo吗`)) {
        // console.log(id);
        // this.deleteTodo(id);
        // this.$bus.$emit('deleteTodo',id)
        pubsub.publish("deleteTodo", id);
      }
    },
    handleEdit(todo) {
      if (todo.hasOwnProperty("isEdit")) {
        todo.isEdit = true;
      } else {
        //列表渲染，直接用todo.isEdit=true是不会引起页面渲染变化的
        this.$set(todo, "isEdit", true);
        console.log(todo);
      };
      //这里的逻辑是会先执行按钮这个方法所有内容才会去渲染解析输入框，所以需要设置个定时器,或者使用$nextTick,所指定的回调会在下一次dom更新完毕之后再调用
      /*
      setTimeout(()=>{
        this.$refs.inputTitle.focus()
      },200)
      */
      this.$nextTick(function(){
        this.$refs.inputTitle.focus()
      })
    },
    //失去焦点回调，真正执行修改逻辑
    handleBlur(todo, e) {
      todo.isEdit = false;
      console.log(todo.id, e.target.value);
      if(!e.target.value.trim()) return alert('输入不能为空！')
      this.$bus.$emit("updateTodo", todo.id, e.target.value);
    },
  },
};
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}
li label {
  float: left;
  cursor: pointer;
}
li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}
li button {
  float: right;
  display: none;
  margin-top: 3px;
}
li:before {
  content: initial;
}
li:last-child {
  border-bottom: none;
}
li:hover {
  background: #ddd;
}
li:hover button {
  display: block;
}
</style>