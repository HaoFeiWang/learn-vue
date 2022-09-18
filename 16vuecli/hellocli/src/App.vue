<template>
  <div id="app">
    <School />
    <Mixin />
  </div>
</template>

<script>
//引入School组件
import School from './components/School.vue'
import Mixin from './components/Mixin.vue'

export default {
  name: 'App',
  components: {
    School,
    Mixin
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
