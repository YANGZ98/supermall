import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Toast from 'components/common/toast/index'
import FastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'
Vue.config.productionTip = false
// 安装Toast 
Vue.use(Toast)
// 使用fastclick
FastClick.attach(document.body);
// 使用lazyload
Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: require('./assets/img/common/placeholder.png'),
  attempt: 1
})
//全局注册定义eventBus
Vue.prototype.$bus = new Vue()
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
