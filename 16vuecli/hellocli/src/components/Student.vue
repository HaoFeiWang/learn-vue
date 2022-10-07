<template>
    <div class="student">
        <h2>学生姓名：{{name}}</h2>
        <h2>学生地址：{{age+1}}</h2>
        <button @click="clickStudent">点击学生信息</button>
        <button @click="sendEventBus">发送全局事件</button>

        <br />
        <input v-if="showEdit" ref="input" type="text" />
        <button @click="showInput">点击显示输入框</button>
    </div>
</template>

<script>
import PubSub from 'pubsub-js'
export default {
    name: "Student",

    data() {
        return {
            //传入的prop尽量不要进行修改
            //props优先级高于data，所以可以将props赋值给data，然后修改data
            myAge: this.age,
            showEdit: false
        }
    },

    //简单接收
    //props: ['name', 'age']

    //接收的同时对类型进行限制
    // props:{
    //     name:String,
    //     age:Number
    // },

    //最完整的写法
    props: {
        name: {
            type: String,
            //必须传入
            required: true,
        },
        age: {
            type: Number,
            //如果不传默认值
            default: 25
        }
    },

    methods: {
        clickStudent() {
            //发送自定义事件，自定义事件也是一种 子组件===>父组件 传递数据的方式
            this.$emit("clickStudent", "A", "B", "C")
        },
        sendEventBus() {
            console.log("sendEventBus", this)
            this.$bus.$emit("busEvent", "A")
            //通过pubsub-js库进行发布订阅
            PubSub.publish("publishEvent", "B")
            PubSub.publish("publishEvent2", "C")
        },
        showInput() {
            this.showEdit = true
            //$nextTick 表示在模板解析完成之后的下一轮执行的事件，如果立即执行时input还没有被渲染
            this.$nextTick(function(){
                this.$refs.input.focus()
            })
        }
    }

}
</script>

<!-- scoped是局部作用域，表示仅对当前文件生效 -->
<style scoped>
.student {
    background-color: aquamarine;
    padding: 10px;
    margin-top: 30px;
    margin-bottom: 30px;
}
</style>
