<template>
<div>
    <Student name="李四" gen="女" :age="18"/>
    <!-- 传字符串进去的话还不能在前面加冒号儿 -->
</div>
</template>

<script>
import Student from './components/Student.vue'
export default {
  components: { Student },

}
</script>

