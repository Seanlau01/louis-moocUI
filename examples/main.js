import Vue from 'vue'
import App from './App.vue'

// import '../components/css/demo.scss'
// import '../components/css/card.scss'
// import Demo from '../components/lib/demo/index'
// import Card from '../components/lib/card/index'
// Vue.use(Demo)
// Vue.use(Card)

// 全局引用
// import 'louis-mooc-ui/dist/css/index.css';
// import LSMUI from 'louis-mooc-ui';
// Vue.use(LSMUI)
//按需引用
import 'louis-mooc-ui/dist/css/demo.css';
import 'louis-mooc-ui/dist/css/card.css';
import Demo from 'louis-mooc-ui/dist/demo.umd.js';
import Card from 'louis-mooc-ui/dist/card.umd.js';
Vue.use(Demo)
Vue.use(Card)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
/* eslint-disable */