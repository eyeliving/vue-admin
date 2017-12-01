import router from './router'
import store from './store'
import { Message } from 'element-ui'
import createUserMaps from './usermaps'


// 不重定向白名单
const whiteList = ['/login']

router.beforeEach((to, from, next) => {
	if (store.getters.token) {
	    if (to.path === '/login') {
	      next({ path: '/' })
	    } else {
	  	  if (store.getters.usermaps.length === 0) {
	        store.dispatch('GetUserInfo').then(res => {
	          next()
	          router.addRoutes([createUserMaps(store.getters.usermaps)])
	        }).catch((e) => {
	          store.dispatch('FedLogOut').then(() => {
	            Message.error('验证失败,请重新登录')
	            next({ path: '/login' })
	          })
	        })
	      } else {
	        next()
	      }
		}
	}else{
		if (whiteList.indexOf(to.path) !== -1) {
	      next()
	    } else {
	      next({ path: '/login' })
	    }
	}
})

router.afterEach((to, from, next) => {
  if (to.path !== '/login') {
  	  var recentHistoryList = localStorage.getItem('recent_history_list')
	  recentHistoryList = recentHistoryList ? JSON.parse(recentHistoryList) : []
	  for (let i = 0; i < recentHistoryList.length; i++) {
	    if (recentHistoryList[i].path === to.path && recentHistoryList[i].name === to.name) {
	      recentHistoryList.splice(i, 1)
	      break
	    }
	  }
	  recentHistoryList.push({name: to.name, path: to.path, icon: ''})
	  localStorage.setItem('recent_history_list', JSON.stringify(recentHistoryList))
  }
})
