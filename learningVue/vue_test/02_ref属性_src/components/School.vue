
<template>
  <div class="school">
    <h2>school name :{{name}}</h2>
    <h2>school addr: {{addr}}</h2>
  </div>
</template>

<script>
export default {
    name:'School',
    data() {
        return {
            name:'Hainan University',
            addr:'Hainan'
        }
    },
}
</script>

<style>
    .school{
        background-color: #bfc;
    }
</style>