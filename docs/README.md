# 快速开始

#### 安装组件库

```bash
npm i louis-mooc-ui
```

#### 使用组件库
> 在 main.js 中引用组件库

```javascript
//全部引入
import 'louis-mooc-ui/dist/css/index.css';
import LSMUI from 'louis-mooc-ui';
Vue.use(LSMUI)

//按需引用 Demo 组件
import 'louis-mooc-ui/dist/css/demo.css';
import Demo from 'louis-mooc-ui/dist/demo.umd.js';
Vue.use(Demo)

//按需引用 Card 组件 
import 'louis-mooc-ui/dist/css/card.css';
import Card from 'louis-mooc-ui/dist/card.umd.js';
Vue.use(Card)
```
