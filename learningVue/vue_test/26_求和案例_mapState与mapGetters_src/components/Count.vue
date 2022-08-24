<template>
  <div class="count">
    <h1>当前求和为{{sum}}</h1>
    <h3>当前求和放大十倍为{{bigSum}}</h3>
    <h3>我在{{school}}学习{{subject}}</h3>

    <select v-model="n">
      <!-- 草了，忘了不加冒号的value会变成字符串，也可以 在上面的v-model加上.number
      -->
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <button @click="incre">+</button>
    <button @click="decre">-</button>
    <button @click="increOdd">当前求和为奇数再加</button>
    <button @click="increWait">等等再加</button>
  </div>
</template>

<script>
import {mapState,mapGetters} from 'vuex'
export default {
  name: "Count",
  data(){
    return{
      n:1,//用户选择的数字
    }
  },
  computed:{
    //程序员亲自去写计算属性
    // he(){
    //   return this.$store.state.sum
    // },
    // xuexiao(){
    //   return this.$store.state.school
    // },
    // xueke(){
    //   return this.$store.state.subject
    // },
    //借助mapState生成计算属性，从state中读取数据,（对象写法）...可以将其展开然后放入内容
    // ...mapState({'he':'sum',xuexiao:'school',xueke:'subject'}),
    //(数组写法，名与state里属性名相同的时候用)
    ...mapState(['sum','school','subject']),


    // dahe(){
    //   return this.$store.getters.bigSum
    // },
    //借助mapGetters从getters读取数据，映射为计算属性
    // ...mapGetters({bigSum:'bigSum'}),
    ...mapGetters(['bigSum'])
  },
  methods:{
    incre(){
      this.$store.commit('ADD',this.n)
    },
    decre(){
      this.$store.commit('MINUS',this.n)
    },
    increOdd(){
      this.$store.dispatch('addOdd',this.n)
    },
    increWait(){
      this.$store.dispatch('addWait',this.n)
    }
  },
  mounted(){
    console.log('Count',this.$store)
    const x = mapState({'he':'sum',xuexiao:'school',xueke:'subject'})
  }
}
</script>

<style>
button{
  margin-left: 8px;
}
</style>