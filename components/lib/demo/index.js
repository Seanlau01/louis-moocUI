import Demo from './src/mainCom.vue'

Demo.install=function(Vue){
    Vue.component(Demo.name,Demo)
}
export default Demo