import Vue from 'vue'
import Router from 'vue-router'



import Home from '../views/home.vue'
import Login from '../views/login.vue'
import Register from '../views/register.vue'
import GoodsDetail from '../views/GoodsDetail.vue'
import  Cart from '../views/Cart.vue'
import Address from '../views/Address.vue'
import orderConfirm from '../views/orderConfirm.vue'
import orderSuccess from '../views/orderSuccess.vue'

Vue.use(Router)

export default new Router({

  routes: [
    { path: '/', redirect: { name: 'home' } },//重定向
    { name: 'home', path: '/home', component: Home },
    { name: 'login', path: '/login', component: Login },
    { name: 'register', path: '/register', component: Register },
    { name:'goodsDetail',path:'/goodsDetail',component:GoodsDetail},
    { name:'cart',path:'/cart',component:Cart},
    { name:'address',path:'/address',component:Address},
    { name:'orderConfirm',path:'/orderConfirm',component:orderConfirm},
    { name:'orderSuccess',path:'/orderSuccess',component:orderSuccess},
  ]
})
