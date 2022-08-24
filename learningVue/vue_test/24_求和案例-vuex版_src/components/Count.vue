<template>
  <div class="count">
    <h1>当前求和为{{$store.state.sum}}</h1>
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
export default {
  name: "Count",
  data(){
    return{
      n:1,//用户选择的数字
    }
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

}
</script>

<style>
button{
  margin-left: 8px;
}
</style>