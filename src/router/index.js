import Vue from 'vue'
import Router from 'vue-router'
import WorkPanel from '@/pages/WorkPanel'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'WorkPanel',
      component: WorkPanel
    }
  ]
})
