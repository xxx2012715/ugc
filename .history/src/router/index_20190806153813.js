import Vue from 'vue'
import Router from 'vue-router'
// import QuestionPool from '@pages/QuestionPool'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: resolve => require(['@/pages/login'], resolve),
    },
    {
      path: '/main',
      component: resolve => require(['@/components/Main'], resolve),
      children: [
        {
          path: 'workPanel',
          component: resolve => require(['@/pages/ProductManager/WorkPanel'], resolve),
          meta: {
            title: '工作面板',
          }
        },
        {
          path: '/questionPool',
          component: resolve => require(['@/pages/ProductManager/QuestionPool'], resolve),
          meta: {
            title: '问题池',
          }
        },
        {
          path: '/workForum',
          component: resolve => require(['@/pages/ProductManager/WorkForum'], resolve),
          meta: {
            title: '论坛',
          }
        },
        {
          path: '/permissionApply',
          component: resolve => require(['@/pages/ProductManager/PermissionApply'], resolve),
          meta: {
            title: '申请权限',
          }
        }]
    },
    // 管理员
    {
      path: '/manager',
      component: resolve => require(['@/pages/Manager/Home'], resolve),
      children: [
        {
          path: 'workPanel',
          component: resolve => require(['@/pages/Manager/WorkPanel'], resolve),
          meta: {
            title: '工作面板',
          }
        }]
    },
  ]
})
