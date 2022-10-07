//Vuex

import Vuex from 'vuex'
import Vue from 'vue'

//必须要在创建 Vuex 前引用插件
Vue.use(Vuex)

//准备actions，用于响应组件中的动作
const actions = {
    //context相当于一个缩小版的store
    add(context, num) {
        console.log("Vuex actions add", num)
        context.commit("add", num)
    }
}

//准备mutations，用于操作数据（state）
const mutations = {
    add(context, num) {
        console.log("Vuex mutations add", num)
        state.sum += num
    },
    sub(context, num) {
        console.log("Vuex mutations sub", num)
        state.sum -= num
    }
}

//准备state，用于存储数据
const state = {
    sum: 0
}

export default new Vuex.Store({
    actions,
    mutations,
    state
})