<template>
  <div id="app">
    <School />
    <Mixin />

    <h1>默认插槽</h1>
    <div class="defaultSlot">
      <DefaultSlot title="美食">
        <img src="https://img0.baidu.com/it/u=285548901,2228665146&fm=253&fmt=auto&app=138&f=JPEG?w=600&h=400" />
      </DefaultSlot>
      <DefaultSlot title="游戏">
        <li v-for="(name,index) in games" :key="index">
          {{name}}
        </li>
      </DefaultSlot>
      <DefaultSlot title="电影">
        <video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
      </DefaultSlot>
    </div>

    <h1>具名插槽</h1>
    <div class="defaultSlot">
      <NameSlot title="美食">
        <img slot="center"
          src="https://img0.baidu.com/it/u=285548901,2228665146&fm=253&fmt=auto&app=138&f=JPEG?w=600&h=400" />
        <a slot="footer" href="http://www.baidu.com">更多美食</a>
      </NameSlot>
      <NameSlot title="游戏">
        <li slot="center" v-for="(name,index) in games" :key="index">
          {{name}}
        </li>
        <a slot="footer" href="http://www.baidu.com">单机游戏</a>
        <a slot="footer" href="http://www.baidu.com">网络游戏</a>
      </NameSlot>
      <NameSlot title="电影">
        <video slot="center" controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
        <!-- template的v-slot是仅该标签使用的特殊语法 -->
        <template v-slot:footer>
          <a href="http://www.baidu.com">最新上映</a>
          <a href="http://www.baidu.com">海外电影</a>
        </template>
      </NameSlot>
    </div>

    <h1>作用域插槽</h1>
    <ScopeSlot>
      <!-- scope为插槽传递出来的数据，其只能使用在template标签上 -->
      <template scope="innerDatas">
        <ul>
          <li slot="center" v-for="(name,index) in innerDatas.phones" :key="index">
            {{name}}
          </li>
        </ul>
      </template>

    </ScopeSlot>

    <h1>计算器</h1>
    <Count></Count>
  </div>
</template>

<script>
//引入School组件
import School from './components/School.vue'
import Mixin from './components/Mixin.vue'
import DefaultSlot from './components/DefaultSlot.vue'
import Vue from 'vue'
import NameSlot from './components/NameSlot.vue'
import ScopeSlot from './components/ScopeSlot.vue'
import Count from './components/Count.vue'

export default {
  name: 'App',
  components: {
    School,
    Mixin,
    DefaultSlot,
    NameSlot,
    ScopeSlot,
    Count
},
  data() {
    return {
      foots: ["火锅", "烧烤", "小龙虾", "牛排"],
      games: ["英雄联盟", "和平经营", "王者荣耀", "刺激战场"],
      films: ["《教父》", "《拆弹专家》", "《肖申克的救赎》", "《当幸福来敲门》"]
    }
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.defaultSlot {
  display: flex;
  justify-content: space-around
}

img {
  width: 100%;
}

video {
  width: 100%;
}
</style>
