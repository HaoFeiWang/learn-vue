<template>
    <div>
        <h3>{{title}}</h3>
        <!-- 将数据传递给插槽的使用者 -->
        <slot :phones="phones"></slot>
    </div>
</template>

<script>
export default {
    name: "ScopeSlot",
    data() {
        return {
            phones: ["华为", "小米", "Vivo", "Oppo"]
        }
    },
    props: ['title']
}
</script>

<style scoped>
div {
    background-color: aquamarine;
    width: 200px;
    height: 300px;
}

h3 {
    text-align: center;
    background-color: coral;
}
</style>