<template>
    <div>
        <h3>{{title}}</h3>
        <slot name="center"></slot>
        <slot name="footer"></slot>
    </div>
</template>

<script>
export default {
    name: "NameSlot",
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