<template>
<div>
    <div class="isidebar">
    	<div class="isidebar-content">
    		<div class="sidebar-inner" id="isidebar_items">
    			
    			
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
export default {
  data () {
    return {
      categoryUnfoldIndex: -1, // 顶级菜单选中ID
      categoryHeight: 0,
      currentProductId: '', // 当前子菜单选中ID
      childMenuData: [], // 分出菜单
      childMenuData_title: '', // 分出菜单标题,
      childsMenuDisabled: false, // 分出菜单收缩
      childsMenuId: '', // 标记分出菜单选中状态
      menuData: [
        { name: '大数据（数加）', children: [{id: 1, name: '机器学习', url: 'pagedemo'}, {id: 2, name: '数据集成', url: 'pagedemo1'}, {id: 8, name: 'DataWorks', url: 'pagedemo2'}] },
        { name: '安全（云盾）',
          children: [{ id: 3,
            name: 'DDoS高防IP',
            children: [ {id: 31, name: '基础防护'}, {id: 32,
              name: '高防IP',
              children: [
                {id: 321, name: '安全报表'},
                {id: 322, name: '网站'},
                {id: 323, name: '非网站'},
                {id: 323, name: '实例列表'},
                {id: 325, name: '操作日志'}
              ]}
            ]},
          { id: 4,
            name: '云盾 ● 态势感知',
            children: [
              {id: 6, name: '组件1-1', url: '/pagedemo4'},
              {id: 7, name: '组件1-2', url: '/pagedemo5'},
              {id: 8, name: '组件1-3', children: [{id: 481, name: '组件1-3-1', url: '/pagedemo6'}, {id: 482, name: '组件1-3-2', url: '/pagedemo7'}, {id: 483, name: '组件1-3-3'}]},
              {id: 9, name: '组件1-4', children: [{id: 491, name: '组件1-4-1', url: '/pagedemo8'}, {id: 492, name: '组件1-4-2'}, {id: 493, name: '组件1-4-3'}]}
            ]}
          ]},
        {
          name: '测试',
          children: [{id: 5, name: '测试1', url: '/pagedemo3'}]
        }]
    }
  },
  methods: {
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
        this.$emit('menustatus', 1)
      } else {
        this.childMenuData = []
        this.childMenuData_title = ''
        this.$emit('menustatus', 0)
        child.url && this.$router.push({ path: child.url })
      }
    },
    pageFns ($index, item) {
      // 无限级别菜单操作
//    for (let i = 0; i < this.childMenuData.length; i++) {
//      if (this.childMenuData[i].id !== this.childsMenuId) {
//        this.$set(this.$data.childMenuData[i], '_showChild', false)
//      }
//    }
//    this.childsMenuId = item.id
//    item._showChild = !item._showChild

      this.childsMenuId = item.id
      let _ishow = item._showChild
      for (let i = 0; i < this.childMenuData.length; i++) {
        this.$set(this.$data.childMenuData[i], '_showChild', false)
      }
      this.$set(this.$data.childMenuData[$index], '_showChild', !_ishow)
    },
    openPage (item) {
      this.childsMenuId = item.id
      item.url && this.$router.push({ path: item.url })
    },
    childNavBar () {
      this.childsMenuDisabled = !this.childsMenuDisabled
      if (this.childsMenuDisabled) {
        this.$emit('menustatus', 0)
      } else {
        this.$emit('menustatus', 1)
      }
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


<style>
.childs-menu-status-open>.viewFramework-product-navbar {
	width: 360px!important;
}
.childs-menu-status-open>.viewFramework-product-navbar-collapse{
	left: 340px!important;
}
.childs-menu-status-closed>.viewFramework-product-navbar-collapse{
	left: 180px!important;
}

.childs-menu-status-open .icon-collapse-left {
    display: inline;
}
.childs-menu-status-closed  .icon-collapse-left {
    display: none;
}
.childs-menu-status-closed .icon-collapse-right {
    display: inline;
}
.childs-menu-status-open .icon-collapse-right {
    display: none;
}

.childs-menu-status-open .viewFramework-product-navbar-collapse .product-navbar-collapse-bg{
	right: 0;
    left: auto;
    border-bottom: 9px solid transparent;
    border-left: none;
    border-right: 13px solid #f7f7f7;
    border-top: 9px solid transparent;
}
.childs-menu-status-open .viewFramework-product-navbar-collapse:hover .product-navbar-collapse-bg {
    border-bottom: 8px solid transparent;
    border-left: none;
    border-right: 20px solid #f7f7f7;
    border-top: 8px solid transparent;
}
.viewFramework-product-navbar-collapse .product-navbar-collapse>span {
    font-size: 15px;
    line-height: 50px;
    vertical-align: text-top;
    color: #546478;
}


.viewFramework-product-navbar-collapse .product-navbar-collapse-bg {
    width: 0;
    height: 50px;
    position: absolute;
    top: 0;
    left: 0;
    border-bottom: 9px solid transparent;
    border-left: 13px solid #D9DEE4;
    border-top: 9px solid transparent;
    -o-transition: all 0.1s ease,0.1s ease;
    -ms-transition: all 0.1s ease,0.1s ease;
    -moz-transition: all 0.1s ease,0.1s ease;
    -webkit-transition: all 0.1s ease,0.1s ease;
}

.childs-menu-status-closed .viewFramework-product-navbar-collapse:hover .product-navbar-collapse-bg {
    border-bottom: 8px solid transparent;
    border-left: 20px solid #D9DEE4;
    border-top: 8px solid transparent;
}
</style>