import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

// const page_index = () => import('../pages/index')
import pageIndex from '@/pages/index'
import pageDemo from '@/pages/demo/index'
import pageDemo1 from '@/pages/demo/index1'
import pageDemo2 from '@/pages/demo/index2'
import pageDemo3 from '@/pages/demo/index3'
import pageDemo4 from '@/pages/demo/index4'
import pageDemo5 from '@/pages/demo/index5'
import pageDemo6 from '@/pages/demo/index6'
import pageDemo7 from '@/pages/demo/index7'
import pageDemo8 from '@/pages/demo/index8'
import pageDemo9 from '@/pages/demo/index9'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'pageIndex',
      meta: {name: '首页', icon: ''},
      component: pageIndex
    },
    {
      path: '/pagedemo',
      name: 'pageDemo',
      meta: {name: '测试用例', icon: ''},
      component: pageDemo
    },
    {
      path: '/pagedemo1',
      name: 'pageDemo1',
      meta: {name: '测试用例1', icon: ''},
      component: pageDemo1
    },
    {
      path: '/pagedemo2',
      name: 'pageDemo2',
      meta: {name: '测试用例2', icon: ''},
      component: pageDemo2
    },
    {
      path: '/pagedemo3',
      name: 'pageDemo3',
      meta: {name: '测试用例3', icon: ''},
      component: pageDemo3
    },
    {
      path: '/pagedemo4',
      name: 'pageDemo4',
      meta: {name: '测试用例4', icon: ''},
      component: pageDemo4
    },
    {
      path: '/pagedemo5',
      name: 'pageDemo5',
      meta: {name: '测试用例5', icon: ''},
      component: pageDemo5
    },
    {
      path: '/pagedemo6',
      name: 'pageDemo6',
      meta: {name: '测试用例6', icon: ''},
      component: pageDemo6
    },
    {
      path: '/pagedemo7',
      name: 'pageDemo7',
      meta: {name: '测试用例7', icon: ''},
      component: pageDemo7
    },
    {
      path: '/pagedemo8',
      name: 'pageDemo8',
      meta: {name: '测试用例8', icon: ''},
      component: pageDemo8
    },
    {
      path: '/pagedemo9',
      name: 'pageDemo9',
      meta: {name: '测试用例9', icon: ''},
      component: pageDemo9
    }
  ]
})
