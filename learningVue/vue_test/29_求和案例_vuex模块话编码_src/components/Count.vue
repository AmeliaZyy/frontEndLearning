<template>
  <div class="count">
    <h1>当前求和为{{sum}}</h1>
    <h3>当前求和放大十倍为{{bigSum}}</h3>
    <h3>我在{{school}}学习{{subject}}</h3>
    <h3 style="color:red">person组件总人数是{{personList.length}}</h3>
    <select v-model="n">
      <!-- 草了，忘了不加冒号的value会变成字符串，也可以 在上面的v-model加上.number
      -->
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <button @click="incre(n)">+</button>
    <button @click="decre(n)">-</button>
    <button @click="increOdd(n)">当前求和为奇数再加</button>
    <button @click="increWait(n)">等等再加</button>
  </div>
</template>

<script>
import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'
export default {
  name: "Count",
  data(){
    return{
      n:1,//用户选择的数字
    }
  },
  computed:{
    //借助mapState生成计算属性，从state中读取数据,（对象写法）...可以将其展开然后放入内容
    // ...mapState({'he':'sum',xuexiao:'school',xueke:'subject'}),
    //(数组写法，名与state里属性名相同的时候用)
    ...mapState('countAbout',['sum','school','subject']),
    ...mapState('personAbout',['personList']),


    //借助mapGetters从getters读取数据，映射为计算属性
    // ...mapGetters({bigSum:'bigSum'}),
    ...mapGetters('countAbout',['bigSum'])
  },
  methods:{
    //借助mapMutations生成对应的方法，方法中会调用commit去联系mutations（也可以写成数组哈）（记得在绑定事件时传递好参数）
    ...mapMutations('countAbout',{incre:'ADD',decre:'MINUS'}),

    //借助mapActions生成对应的方法，会调用dispatch（也可以数组）（记得在绑定事件时传递好参数）
    ...mapActions('countAbout',{increOdd:'addOdd',increWait:'addWait'})
  },
  mounted(){
    console.log('Count',this.$store)
  }
}
</script>

<style>
button{
  margin-left: 8px;
}
</style>