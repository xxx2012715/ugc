// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/utils/reset.css'
import '@/assets/utils/iconfont.css'

// 引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

// 使用饿了么UI
Vue.config.productionTip = false
Vue.use(ElementUI)

// 引入请求模块
import axios from 'axios'
import { getRequest } from './assets/js/http'
import { postRequest } from './assets/js/http'
import { deleteRequest } from './assets/js/http'
import { putRequest } from './assets/js/http'
//  向VUE的原型上添加请求方法
Vue.prototype.getRequest = getRequest;
Vue.prototype.postRequest = postRequest;
Vue.prototype.deleteRequest = deleteRequest;
Vue.prototype.putRequest = putRequest;



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
