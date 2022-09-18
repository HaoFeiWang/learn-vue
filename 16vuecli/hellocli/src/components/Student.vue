<template>
    <div>
        <h2>学生姓名：{{name}}</h2>
        <h2>学生地址：{{age+1}}</h2>
    </div>
</template>

<script>
export default {
    name: "Student",

    data() {
        return {
            //传入的prop尽量不要进行修改
            //props优先级高于data，所以可以将props赋值给data，然后修改data
            myAge: this.age
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
    }

}
</script>
