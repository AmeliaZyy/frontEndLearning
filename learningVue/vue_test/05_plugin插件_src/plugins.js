import Vue from "vue";

export default {
    install(Vue){
        console.log('@@@ i am a plugin');
        //定义全局过滤器
        Vue.filter('mySlice',function(value){
            return value.slice(0,4)
        })

        //定义全局自定义指令
        Vue.directive('fbind',{
            //指令与元素成功绑定
            bind(element,binding){
                console.log('bind');
                element.value = binding.value;
            },
            //指令所在元素被放入页面
            inserted(element,binding){
                console.log('inserted');
                element.focus();
            },
            //指令所在模板被重新解析
            update(element,binding) {
                console.log('updated');
                element.value = binding.value;

            },
            
        })

        //定义混入
        Vue.mixin({
            data() {
                return {
                    x:100,
                    y:200
                }
            },
        })

        //给vue原型添加一个方法
        Vue.prototype.hello = ()=>{alert('hellooooooooooo!')}
    }
}