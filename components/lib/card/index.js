import Card from './src/mainCom.vue'

Card.install=function(Vue){
    Vue.component(Card.name,Card)
}
export default Card