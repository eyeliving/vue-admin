<template>
<div :class="{'menu-small':menuIsSmall}">
    <div class="isidebar">
    	<div class="isidebar-content">
    		<div class="sidebar-inner" id="isidebar_items">
    			
    			<div class="sidebar-fold icon-unfold" @click="menuStatusChange()"></div>
    			
    			<div class="sidebar-nav" v-for="(item,$index) in menuData" :class="{'sidebar-nav-active':$index == categoryUnfoldIndex}">
    				<!--一级菜单-->
				    <div class="sidebar-title sidebar-trans" @click="openMenu($event,$index)">
				        <div class="sidebar-title-inner">
				          <span class="sidebar-title-icon icon-arrow-right"></span>
				          <span class="sidebar-title-text">{{item.name}}</span>
				        </div>
				    </div>
				    <!--一级菜单END-->
				    <!--二级菜单-->
				    <ul class="sidebar-trans" :style="{ maxHeight: ($index == categoryUnfoldIndex? categoryHeight: 0) + 'px' }">
							<li v-for="child in item.children" :class="{'active':currentProductId == child.id}" class="nav-item">
								<a class="sidebar-trans" @click="pageFn($event,child)">
									<div class="nav-icon sidebar-trans">
										<span class="icon-ddos"></span>
									</div>
									<span class="nav-title">{{child.name}}</span>
								</a>
							</li>
					</ul>
				    <!--二级菜单END-->
    			</div>
    			
    			
    		</div>
    	</div>
    	
   </div> 	
    	
    	
    	
<div :class="{'childs-menu-status-open': (childMenuData.length>0 && !childsMenuDisabled), 'childs-menu-status-closed': (childMenuData.length>0 && childsMenuDisabled)}">
	
	<!--分出菜单-->
	<div class="viewFramework-product-navbar">
		<div bindonce="" class="product-nav-stage product-nav-stage-main" ng-show="navScene" ng-class="{'product-nav-stage-main':navScene=='main','product-nav-stage-sub':navScene=='sub'}">
			<div class="product-nav-scene product-nav-main-scene">
			
				<div class="product-nav-title" id="nav-title" text-length="20">{{childMenuData_title}}</div>
			
				<div class="product-nav-list">
					<ul role="tree" aria-labelledby="nav-title">
						<template v-for="(item,$index) in childMenuData">
							<li :class="{'active':childsMenuId == item.id}">
								<div>
									<a role="treeitem" @click="pageFns($index,item)">
										<div class="nav-icon">
											<span v-if="item.children && item.children.length>0" :class="{'icon-arrow-down':item._showChild,'icon-arrow-right':!item._showChild}"></span>
										</div>
										<div class="nav-title" text-length="20">{{item.name}}</div>
									</a>
								</div>
							</li>
							
							<ul v-if="item.children && item.children.length>0" v-show="item._showChild" role="group">
								<li v-for="(child,$iindex) in item.children" :class="{'active':childsMenuId === child.id}">
									<div item="childItem">
										<a role="treeitem" @click="openPage(child)">
											<div class="nav-icon"></div>
											<div class="nav-title" text-length="20">{{child.name}}</div>
										</a>
									</div>
								</li>
							</ul>							
							
						</template>
					</ul>
				</div>
			</div>
		</div>
	</div>
	<!--分出菜单 END-->
	
	<!--分出菜单 Bar-->
	<div class="viewFramework-product-navbar-collapse" @click="childNavBar()">
		<div class="product-navbar-collapse-inner">
			<div class="product-navbar-collapse-bg"></div>
			<div class="product-navbar-collapse"><span class="icon-collapse-left"></span> <span class="icon-collapse-right"></span></div>
		</div>
	</div>
	<!--分出菜单 Bar END-->
	
</div>    	
    	




    	
    	
    </div>
</template>


<script>
	import Layout from '@/pages/layout/Layout'
export default {
  data () {
    return {
      menuIsSmall: false, // 菜单状态：{true}一级菜单正常展示,{false}一级菜单缩放展示
      childMenuStatus: false, // 分出菜单状态：{true}分出菜单正常显示,{false}分出菜单缩放展示,{默认}false
      categoryUnfoldIndex: -1, // 顶级菜单选中ID
      categoryHeight: 0,
      currentProductId: '', // 当前子菜单选中ID
      childMenuData: [], // 分出菜单
      childMenuData_title: '', // 分出菜单标题,
      childsMenuDisabled: false, // 分出菜单收缩
      childsMenuId: '', // 标记分出菜单选中状态
      menuData: []
    }
  },
  mounted: function () {
  	this.userMenuData()
  },
  methods: {
  	userMenuData () {
	  	var _menuData = this.$store.getters.usermaps
//		function getComponents(items){
//			var items_child = items.children
//			var _item = {
//					path: items.path,
//					component: Layout,
//					redirect: 'noredirect',
//					children: []
//				}
//			for (let i = 0; i < items_child.length; i++) {
//		  		if(items_child[i].component){
//		  			items_child[i].component = require('@/pages' + items_child[i].component + '.vue')//import('@/pages' + items_child[i].component + '.vue')
//		  			_item.children.push(items_child[i])
//		  		}else if(items_child[i].children && items_child[i].children.length > 0){
//		  			getComponents(items_child[i].children)
//		  		}
//		  	}
//			console.log(_item)
//			_usermaps.push(_item)
//		}
		var _usermaps = {
				path: '/view',
				component: Layout,
				redirect: 'noredirect',
				children: []
			}
	
		function getComponents(items){
  			for (let i = 0; i < items.length; i++) {
		  		if(items[i].component){
		  			items[i].component = import('@/pages' + items[i].component + '.vue') //require('@/pages' + items[i].component + '.vue')
		  			_usermaps.children.push(items[i])
		  			console.log(items[i].component)
		  			console.log(`/view/${items[i].path}`)
		  		}else if(items[i].children && items[i].children.length > 0){
		  			getComponents(items[i].children)
		  		}
		  	}
  		}
  		
  		
	  	for (let i = 0; i < _menuData.length; i++) {
	  		if(_menuData[i].children && _menuData[i].children.length > 0) {
	  			getComponents(_menuData[i].children)
	  		}
//	  		if (i === _menuData.length-1) {
//	  			
//	  		}
	  	}
	  	console.log('===============')
	  	console.log(_usermaps)
	  	this.$router.addRoutes([_usermaps])
	  	this.menuData = _menuData
	  	this.init()
  	},
    init () {
      let menustatus = JSON.parse(localStorage.getItem('menustatus'))
      if (typeof menustatus !== 'undefined') {
        this.menuIsSmall = menustatus
        this.$emit('menustatus', menustatus)
      }
    },
    menuStatusChange () {
      this.menuIsSmall = !this.menuIsSmall
      this.$emit('menustatus', this.menuIsSmall)
      localStorage.setItem('menustatus', this.menuIsSmall)
    },
    openMenu ($event, $index) {
      if (this.categoryUnfoldIndex === $index) {
        this.categoryUnfoldIndex = -1
      } else {
        this.categoryUnfoldIndex = $index
      }
      this.setCategoryHeight($event.currentTarget)
    },
    pageFn ($event, child) {
      this.currentProductId = child.id
      this.childsMenuId = '' // 重置分出菜单选中状态
      if (child.children && child.children.length > 0) {
        this.childMenuData = child.children
        this.childMenuData_title = child.name
        this.childsMenuDisabled = false
        this.childMenuStatus = true
      } else {
        this.childMenuData = []
        this.childMenuData_title = ''
        this.childMenuStatus = false
        child.path && this.$router.push({ path: child.path })
      }
      this.$emit('menuchildstatus', this.childMenuStatus)
    },
    pageFns ($index, item) {
      this.childsMenuId = item.id
      let _ishow = item._showChild
      for (let i = 0; i < this.childMenuData.length; i++) {
        this.$set(this.$data.childMenuData[i], '_showChild', false)
      }
      this.$set(this.$data.childMenuData[$index], '_showChild', !_ishow)
    },
    openPage (item) {
      this.childsMenuId = item.id
      item.path && this.$router.push({ path: item.path })
    },
    childNavBar () {
      this.childsMenuDisabled = !this.childsMenuDisabled
      if (this.childsMenuDisabled) {
        this.menuchildstatus = false
      } else {
        this.menuchildstatus = true
      }
      this.$emit('menuchildstatus', this.menuchildstatus)
    },
    setCategoryHeight (target, length) {
      if (!length) {
        var $menuBox = target.nextElementSibling
        length = $menuBox.querySelectorAll('li').length
      }
      var currentTargetUlHeight = length * 40
      var leftHeight = this.calculateLeftHeight()
      this.categoryHeight = currentTargetUlHeight < leftHeight ? currentTargetUlHeight : leftHeight
    },
    calculateLeftHeight () {
      var elementHeight = document.documentElement.clientHeight// screen height
      var categories = this.menuData
      var sidebarFoldHeight = 0// container.find(".sidebar-fold").height();// slide bar顶部的高度
      var titleHeight = categories && categories.length > 0 ? 40 * (categories.length + 1) : 0
      return elementHeight - sidebarFoldHeight - titleHeight - 10
    }
  }
}
</script>