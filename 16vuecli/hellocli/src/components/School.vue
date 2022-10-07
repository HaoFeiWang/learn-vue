<template>
    <div class="school">
        <h2 ref="title">学校名称：{{schoolName}}</h2>
        <h2>学校地址：{{address}}</h2>
        <!-- :为v-bind的缩写，v-bind表示age的值为表达式，则会转会为number类型 -->
        <!-- v-on:clickStudent 自定义事件 -->
        <Student name="张三" :age="18" ref="zhangsan" v-on:clickStudent="showStudent"></Student>
        <button @click="showDom">点我显示组件</button>
        <button @click="unbindStudent">点我解绑Student自定义事件</button>
    </div>
</template>

<script>
import Student from './Student.vue'
import PubSub from 'pubsub-js'
//Vue.extend可以省略
export default {
    name: "School",
    components: {
        Student
    },
    data() {
        return {
            schoolName: "清华大学",
            address: "北京"
        }
    },
    methods: {
        showDom() {
            //打印的是真实Dom元素
            console.log("h1", this.$refs.title)
            //打印的是组件VueComponent
            console.log("student", this.$refs.zhangsan)
        },
        //ES6将多个参数放入数组中
        showStudent(...params) {
            console.log("showStudent", params)
        },
        unbindStudent() {
            //解绑单个事件
            this.$refs.zhangsan.$off("clickStudent")
            //解绑多个事件
            this.$refs.zhangsan.$off(["clickStudent", "test"])
            //解绑所有事件
            this.$refs.zhangsan.$off()
        }
    },
    mounted() {
        //动态绑定事件
        this.$refs.zhangsan.$on("clickStudent", this.showStudent)
        //动态监听全局事件，如果使用匿名方法需要使用箭头函数
        this.$bus.$on("busEvent", (params) => {
            console.log("showBusEvent", params)
        })
        //通过 PubSub-js 库订阅消息
        PubSub.subscribe("publishEvent", (...params) => {
            console.log("publishEvent", params)
        })
    },
    beforeDestroy() {
        //全局事件需要解绑
        this.$bus.$off("busEvent")
    }
}
</script>