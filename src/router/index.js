import Vue from 'vue'
import Router from 'vue-router'
// import QuestionPool from '@pages/QuestionPool'

Vue.use(Router)

export default new Router({
  routes: [
	{
		path: '/',
		component: resolve => require(['@/pages/login'],resolve),
	},
    {
      path: '/main',
      component: resolve => require(['@/components/Main'], resolve),
      children: [
        {
			path: '/workPanel',
			component: resolve => require(['@/pages/panel/WorkPanel'], resolve),
			meta: {
				title: '工作面板板块',
			}
        },
		{
			path: '/questionPool',
			component: resolve => require(['@/pages/questionPool'], resolve),
			meta: {
				title: '工作面板板块',
			}
        },
      ]
    },

  ]
})
