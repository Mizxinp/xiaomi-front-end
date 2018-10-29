// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
/* import Vuex from 'vuex'

Vue.use(Vuex) */


//引入ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);


/* 引入Axios */
import Axios from 'axios';
Vue.prototype.axios = Axios;


Vue.config.productionTip = false

//引入全局组件
import NavHeader from './components/NavHeader.vue'
import NavFooter from './components/NavFooter.vue'
import Madal from './components/modal.vue'

//定义全局组件
Vue.component('navHeader',NavHeader);
Vue.component('navFooter',NavFooter)
Vue.component('modal',Madal);

//引入自己的样式
import './assets/css/base.css'

/* const store = new Vuex.Store({
  state: {
    keyWord:''
  },
  mutations: {
    //更新用户信息
    updateUserInfo(state, nickName) {
      state.nickName = nickName;
    },
  }
}); */

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,

  components: { App },
  template: '<App/>'
})
