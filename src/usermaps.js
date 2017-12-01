import Layout from '@/pages/layout/Layout'
import lazyComponent from '@/tools/lazy_component'

var _usermaps = {
	path: '/view',
	component: Layout,
	redirect: '/',
	children: []
}

/**
 * 根据后端动态菜单数据生成 当前登录用户可访问(有权限)路由
 * @param {Array} usermaps
 */
function createUserMaps(usermaps) {
	for(let i = 0; i < usermaps.length; i++) {
		if(usermaps[i].children && usermaps[i].children.length > 0) {
			getComponents(usermaps[i].children)
		}
	}
	return _usermaps
}
/**
 * 根据权限匹配本地组件
 * @param {Array} items
 */
function getComponents(items) {
	for(let i = 0; i < items.length; i++) {
		if(items[i].component) {
			items[i].component = lazyComponent(items[i].component)
			_usermaps.children.push(items[i])
		} else if(items[i].children && items[i].children.length > 0) {
			getComponents(items[i].children)
		}
	}
}


export default createUserMaps