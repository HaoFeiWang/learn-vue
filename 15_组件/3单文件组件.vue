<template>
    <div class="school">
        <h2>学校名称：{{schoolName}}</h2>
        <h2>学校地址：{{address}}</h2>
        <button @click="showSchoolName">点我提示学校名</button>
    </div>
</template>

<script>
//Vue.extend可以胜率
export default {
    name: "School",
    data() {
        return {
            schoolName: "清华大学",
            address: "北京"
        }
    },
    methods: {
        showSchoolName() {
            alert(this.schoolName)
        }
    }
}
</script>

<style>
.school {
    background-color: aquamarine;
}
</style>