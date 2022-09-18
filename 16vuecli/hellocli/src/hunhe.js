//定义mixin混入
const hunhe = {
    methods:{
        showMounted(){
            console.log("hunhe mounted")
        }
    },
    mounted(){
        this.showMounted()
    }
}
export default hunhe