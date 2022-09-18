<template>
    <h1>测试mixin（混入）</h1>
</template>

<script>
import hunhe from '../hunhe'

export default {
    name: "Mixin",
    //mixin混入相当于复用公共配置，这个属于局部混入
    mixins: [hunhe]
}
</script>
