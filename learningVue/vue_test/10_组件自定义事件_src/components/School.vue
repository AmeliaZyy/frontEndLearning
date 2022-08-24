<template>
  <div class="school">
    <h2>学校名字：{{name}}</h2>
    <h2>学校地址：{{add}}</h2>
    <button @click="sendSchoolName">把学校名字给App</button>
  </div>
</template>

<script>
export default {
    name:'School',
    data(){
        return{
          name:'海南大学',
          add:'海南岛-海口'
        }
    },
    props:['getSchoolName'],
    methods:{
      sendSchoolName(){
        this.getSchoolName(this.name)
      }
    }

}
</script>

<style scoped>
  .school{
    background-color: orange;
    padding: 5px;
  }
</style>