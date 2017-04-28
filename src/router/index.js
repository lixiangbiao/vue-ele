
import hello from '../components/common/view/Hello.vue'
import password from '../components/common/view/Password.vue'
import mobile from '../components/common/view/Mobile.vue'


//vue-router配置
 let routes=[
    {
      path:'/',
      component: hello
    },
    {
      path: '/password',
      component: password
    },
    {
      path: '/mobile',
      component: mobile
    },
    //当打包构建应用时，Javascript 包会变得非常大，影响页面加载。
    //如果我们能把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件
    {
      path: '/personManage',
      component: resolve => require(['../components/common/view/PersonManage.vue'], resolve)
    }
  ]

export default routes;