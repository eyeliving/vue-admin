import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)
// in development env not use Lazy Loading,because Lazy Loading too many pages will cause webpack hot update too slow.so only in production use Lazy Loading

import Layout from '../pages/layout/Layout'


export const staticPageRouter = [
  { path: '/login', component: _import('login/index'), hidden: true },
  { path: '/404', component: _import('404'), hidden: true },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    hidden: true,
    children: [{ path: 'dashboard', name: '系统统计', component: _import('dashboard/index') }]
  },
//{
//	path: '/view',
//  component: Layout,
//  redirect: 'noredirect',
//  children: [{ path: 'dashboard', component: _import('demo/pagedemo') }]
//},
//{ path: '*', redirect: '/404', hidden: true }
]



Vue.use(Router)

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: staticPageRouter
})


// {
//  path: '/example',
//  component: Layout,
//  redirect: 'noredirect',
//  name: 'Example',
//  icon: 'zujian',
//  children: [
//    { path: 'index', name: 'Form', icon: 'zonghe', component: _import('page/form') }
//  ]
//},
//
//{
//  path: '/table',
//  component: Layout,
//  redirect: '/table/index',
//  icon: 'tubiao',
//  noDropdown: true,
//  children: [{ path: 'index', name: 'Table', component: _import('table/index'), meta: { role: ['admin'] }}]
//},