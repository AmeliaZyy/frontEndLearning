import App from './App.vue';

new Vue({
    el:'#root',
    template:`<App></App>`,
    components:{App}
})

/*
    关于不同版本的Vue：

        1.vue.js与vue.runtime.xxx.js的区别：
            完整版的vue包含：核心功能+模板解析器；
            运行版的vue只包含核心功能，没有解析器。
        
        2.因为vue.runtime.xxx.js没有模板解析器，所以不能用template``配置项，需要使用render函数接收到的createElement函数去指定具体内容
*/