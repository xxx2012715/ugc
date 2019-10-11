import Vue from 'vue'
import Router from 'vue-router'
// import QuestionPool from '@pages/QuestionPool'

Vue.use(Router)

const Login = () => import('@/pages/login')
const Main = () => import('@/components/Main')
const WorkPanel = () => import('@/pages/ProductManager/WorkPanel')
const QuestionPool = () => import('@/pages/QuestionPool')
const QuestionDetail = () => import('@/pages/QuestionDetail')
const WorkForum = () => import('@/pages/WorkForum')
const PermissionApply = () => import('@/pages/PermissionApply')
const ManagerWorkPanel = () => import('@/pages/Manager/WorkPanel')
const ProgrammerWorkPanel = () => import('@/pages/Programmer/WorkPanel')
const ForumDetails = () => import('@/pages/Forum/ForumDetails')

export default new Router({
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/main',
      component: Main,
      children: [
        // 产品经理工作面板
        {
          path: '/workPanel',
          component: WorkPanel,
          meta: {
            title: '工作面板',
          }
        },
        // 问题池
        {
          path: '/questionPool',
          component: QuestionPool,
          meta: {
            title: '问题池',
          }
        },
        // 问题详情
        {
          path: '/questionDetail',
          component: QuestionDetail,
          meta: {
            title: '问题详情',
          }
        },
        // 论坛
        {
          path: '/workForum',
          component: WorkForum,
          meta: {
            title: '论坛',
          }
        },
        // 权限申请
        {
          path: '/permissionApply',
          component: PermissionApply,
          meta: {
            title: '申请权限',
          }
        },
        // 管理员工作面板
        {
          path: '/managerWorkPanel',
          component: ManagerWorkPanel,
          meta: {
            title: '工作面板',
          }
        },
        // 研发工作面板
        {
          path: '/ProgrammerWorkPanel',
          component: ProgrammerWorkPanel,
          meta: {
            title: '工作面板',
          }
        },
        // 论坛详细页面
        {
          path: '/forumDetails/',
          name: 'forumDetails',
          component: ForumDetails,
          meta: {
            title: '论坛详情',
          }
        },
      ]
    },
  ]
})
