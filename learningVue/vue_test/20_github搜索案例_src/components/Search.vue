<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model="keyword"
      />&nbsp;
      <button @click="searchUsers">Search</button>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
export default {
    name:'Search',
    data(){
        return{
            keyword:'',
        }
    },
    methods:{
        searchUsers(){
            // axios.get(`https://api.github.com/search/users?q=xxx`)//带问好是get里面的query，xxx是参数
            this.$bus.$emit('updateListData', {
                isFirst: false,
                isLoading: true,
                errMsg: '',
                users: []
            })
            axios.get(`https://api.github.com/search/users?q=${this.keyword}`)
            .then(res => {
                console.log(res.data.items);
                this.$bus.$emit("updateListData", {
                isLoading: false,
                errMsg: '',
                users: res.data.items
                });
            })
            .catch(e => {
                console.log(`请求失败:${e.message}`)
                this.$bus.$emit("updateListData", {
                isLoading: false,
                errMsg: e.message,
                users: []
                });
            });
        }
    }
}
</script>

