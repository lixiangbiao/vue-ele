// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue' //引入vue
import App from './App' //引入App
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import VueRouter from "vue-router" //引入路由
import VueResource from "vue-resource"
//main.js
//开启debug模式
Vue.config.debug = true;

import routes from './router/index'
import $ from 'jquery'


//要把router注入到vue里
Vue.use(VueRouter)
//数据请求相关
Vue.use(VueResource)
//把ElementUI注入到vue里
Vue.use(ElementUI)
// 创建一个路由器实例
// 并且配置路由规则

const router = new VueRouter({
      routes
})

// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
const app = new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')
