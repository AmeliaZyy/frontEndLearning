
<template>
    <div>
        <h2>有个人名字叫{{studentName}}</h2>
        <h2>这个人当年年方{{age}}</h2>
    </div>
</template>


<script>
//组件交互相关代码 这个默认暴露import的时候比较简单
    export default {
        name:'Student',
        data() {
            return {
                studentName: '李二',
                age: 17
            }
        },
    }
</script>
