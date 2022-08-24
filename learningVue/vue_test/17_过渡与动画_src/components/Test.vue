<template>
  <div>
    <button @click="isShow = !isShow">show/hide</button>
    <!-- :appear="true"可以直接写成appear -->
    <transition name="hello" :appear="true">
        <h1 v-show="isShow">Hello beautiful~!</h1>
    </transition>
  </div>
</template>

<script>
export default {
    name:'Test',
    data(){
        return{
            isShow:true
        }
    }
}
</script>

<style scoped>
    h1{
        background-image: linear-gradient(to right, #ee4dc4, #ff4d91, #ff705e, #ff9d2f, #ecc614);
    }

    .hello-enter-active{
        animation: beauty 1s;
    }

    .hello-leave-active{
        animation: beauty 1s reverse;
    }

    @keyframes beauty {
        from{
            transform: translateX(-100%);
        }
        to{
            transform: translateX(0px);
        }
    }
</style>