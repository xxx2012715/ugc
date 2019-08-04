import Vue from 'vue'
import Router from 'vue-router'
// import QuestionPool from '@pages/QuestionPool'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: resolve => require(['@/pages/Main'], resolve),
      children: [
        {
          path: '/',
          component: resolve => require(['@/pages/panel/WorkPanel'], resolve),
          meta: {
            title: '工作面板板块',
          }
        },

      ]
    },

  ]
})
