<template>
    <div class="school">
        <h2 ref="title">学校名称：{{schoolName}}</h2>
        <h2>学校地址：{{address}}</h2>
        <!-- :为v-bind的缩写，v-bind表示age的值为表达式，则会转会为number类型 -->
        <Student name="张三" :age="18" ref="zhangsan"></Student>
        <button @click="showDom">点我显示组件</button>
    </div>
</template>

<script>
import Student from './Student.vue'
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
        }
    }
}
</script>