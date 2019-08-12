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
        // 产品经理工作面板
        {
          path: '/workPanel',
          component: resolve => require(['@/pages/ProductManager/WorkPanel'], resolve),
          meta: {
            title: '工作面板',
          }
        },
        // 问题池
        {
          path: '/questionPool',
          component: resolve => require(['@/pages/QuestionPool'], resolve),
          meta: {
            title: '问题池',
          }
        },
        // 问题详情
        {
          path: '/questionDetail',
          component: resolve => require(['@/pages/QuestionDetail'], resolve),
          meta: {
            title: '问题详情',
          }
        },
        // 论坛
        {
          path: '/workForum',
          component: resolve => require(['@/pages/WorkForum'], resolve),
          meta: {
            title: '论坛',
          }
        },
        // 权限申请
        {
          path: '/permissionApply',
          component: resolve => require(['@/pages/PermissionApply'], resolve),
          meta: {
            title: '申请权限',
          }
        },
        // 管理员工作面板
        {
          path: '/managerWorkPanel',
          component: resolve => require(['@/pages/Manager/WorkPanel'], resolve),
          meta: {
            title: '工作面板',
          }
        },
        // 研发工作面板
        {
          path: '/ProgrammerWorkPanel',
          component: resolve => require(['@/pages/Programmer/WorkPanel'], resolve),
          meta: {
            title: '工作面板',
          }
        },
        // 论坛详细页面
        {
          path: '/forumDetails/:id',
          component: resolve => require(['@/pages/Forum/ForumDetails'], resolve),
          meta: {
            title: '论坛详情',
          }
        },
      ]
    },
  ]
})
