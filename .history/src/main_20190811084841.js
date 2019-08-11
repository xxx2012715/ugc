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


Vue.config.productionTip = false
Vue.use(ElementUI)

// 引入弹窗和cookies
import VueSweetalert2 from 'vue-sweetalert2';
import VueCookies from 'vue-cookies';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
