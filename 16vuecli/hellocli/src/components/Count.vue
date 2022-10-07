<template>
    <div>
        <h3>{{$store.state.sum}}</h3>
        <select v-model.number="num">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
        </select>
        <button @click="add">执行加法</button>
        <button @click="sub">执行减法</button>

    </div>
</template>

<script>
export default {
    data() {
        return {
            num: 0
        }
    },
    methods: {
        add() {
            //给Vuex发送需要执行的 Action
            this.$store.dispatch("add", this.num)
        },
        sub(){
            //给Vuex发送需要执行的 Mutation
            this.$store.commit("sub", this.num)
        }
    }
}
</script>

<style scoped>
button {
    margin-left: 20px;
}
</style>