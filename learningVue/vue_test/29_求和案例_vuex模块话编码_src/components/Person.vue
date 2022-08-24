<template>
  <div>
    <h1>人员列表</h1>
    <h3 style="color:orange">Count组件求和为{{sum}}</h3>
    <h3>列表中第一个人名字是：{{firstPersonName}}</h3>
    <input type="text" placeholder="请输入名字嘿" v-model="name">
    <button @click="add">添加</button>
    <button @click="addWang">添加一个姓王的人</button>
    <button @click="addSentence">随便乱入一句莫名其妙的话</button>

    <ul>
        <li v-for="p in personList" :key="p.id">{{p.name}}</li>
    </ul>
  </div>
</template>

<script>
import {nanoid} from 'nanoid'
import { mapGetters, mapState } from 'vuex'
export default {
    name:'Person',
    data() {
        return {
            name:''
        }
    },
    computed:{
        sum(){
            //居然是state在countAbout前面
            return this.$store.state.countAbout.sum
        },
        ...mapState('personAbout',['personList']),
        // ...mapGetters('personAbout',['firstPersonName'])
        firstPersonName(){
            //这什么玩意儿这getters['personAbout/firstPersonName']
            return this.$store.getters['personAbout/firstPersonName']
        }
    },
    methods:{
        add(){
            const personObj = {id:nanoid(),name:this.name};
            console.log(personObj);
            //居然是‘personAbout/ADD_PERSON’
            this.$store.commit('personAbout/ADD_PERSON',personObj);
            this.name = ''
        },
        addWang(){
            const personObj = {id:nanoid(),name:this.name};
            this.$store.dispatch('personAbout/addPersonWang',personObj);
            this.name = ''
        },
        addSentence(){
            this.$store.dispatch('personAbout/addPersonServer')
        }
    }
}
</script>

