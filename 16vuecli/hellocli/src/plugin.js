//定义插件plugin
const plugin = {
    install(Vue) {
        //插件定义全局过滤器
        Vue.filter('mySlice', function (value) {
            return value.slice(0, 7)
        })

        //插件定义全局过滤器
        Vue.directive('my-directive', {
            bind: function () { },
            inserted: function () { },
            update: function () { },
            componentUpdated: function () { },
            unbind: function () { }
        })

        //插件定义混入
        //Vue.mixin()

        //给Vue原型对象添加函数
        Vue.prototype.hello = ()=>{console.log("你好啊")}
    }
}

export default plugin