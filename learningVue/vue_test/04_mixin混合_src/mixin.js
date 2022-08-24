// 这样是分别暴露，需要花括号调用哦
export const mix = {
    methods: {
        showName(){
            alert(this.name)
        }
    },
    mounted() {
        console.log('mixin里的mix里的mounted被调用啦！')
    },
}

export const mix2 = {
    data() {
        return {
            x:100,
            y:200
        }
    },
}