/**
 * 该文件是整个文件的入口文件
 */

//引入Vue，具体引入的js文件为该module中package.json中的module标签
//默认引入的vue为 vue.runtime.js ，其缺失了模板解析器
import Vue from 'vue'
//引入最原始的Vue
//import Vue from 'vue/dist/vue'

//引入App组件，即所有组件的父组件
import App from './App.vue'

//全局混入
//import hunhe2 from './hunhe'
//Vue.mixin(hunhe2)
//可以配置多个
//Vue.mixin(hunhe2)

//使用插件
import plugin from './plugin'
Vue.use(plugin)

//导入store/index.js，如果没有写文件名，导入时自动寻找index.js
//import Vue.use 后面，但是实际编译完成后，会将所有import都前置在最前面
import store from './store'

Vue.config.productionTip = false

const vm = new Vue({
  //将App组件放入容器中
  //render: h => h(App),
  
  //render是个函数，由Vue进行调用，其传入一个createElement的函数，用于创建标签元素
  //因为引入的Vue缺少模板解析器，所以需要通过render创建元素
  render(createElement){
    return createElement(App)
  },

  //因为引入的 Vue 缺少模板解析器，所以不支持template
  //因为编译完成后，Vue文件中的模板已经被 webpack 编译为了 html、css、js等，所以实际运行不需要模板解析器，可以减少打包体积
  //Vue文件编译过程采用的模板解析器为 vue-template-compiler
  //template:`<h1>你好呀</h1>`

  beforeCreate(){
    //安装全局事件总线
    //因为 VueComponent.prototype._proto_ === Vue.prototype，所以任意组件都可以访问到 $bus 
    //因为 Vue 拥有 $on $emit 相关方法，所以赋值为 this
    Vue.prototype.$bus = this
  },

  //使用Vuex的Store
  store:store

}).$mount('#app')
