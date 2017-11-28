import router from './router'

router.afterEach((to, from, next) => {
  console.log(to)
  var recentHistoryList = localStorage.getItem('recent_history_list')
  recentHistoryList = recentHistoryList ? JSON.parse(recentHistoryList) : []
  for (let i = 0; i < recentHistoryList.length; i++) {
    if (recentHistoryList[i].path === to.path && recentHistoryList[i].name === to.meta.name) {
      recentHistoryList.splice(i, 1)
      break
    }
  }
  recentHistoryList.push({name: to.meta.name, path: to.path, icon: ''})
  localStorage.setItem('recent_history_list', JSON.stringify(recentHistoryList))
  console.log(recentHistoryList)
})
