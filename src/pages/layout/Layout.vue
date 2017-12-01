<!--<template>
  <div class="app-wrapper" :class="{hideSidebar:!sidebar.opened}">
    <div class="sidebar-wrapper">
      <sidebar class="sidebar-container"></sidebar>
    </div>
    <div class="main-container">
      <navbar></navbar>
      <app-main></app-main>
    </div>
  </div>
</template>


<script>
   import { Navbar, Sidebar, AppMain } from '@/views/layout'
   export default {
   name: 'layout',
   components: {
    Navbar,
    Sidebar,
    AppMain
   },
   computed: {
    sidebar () {
      return this.$store.state.app.sidebar
    }
   }
   }
</script>-->

<template>
    <div id="app">
    		<layoutHeader></layoutHeader>
    		<sideMenu @menustatus="menu_is_small" @menuchildstatus="menu_child_status"></sideMenu>
          
          
            
            <div class="main" :style="{ marginLeft: myMarginLeft + 'px' }">
              	<appMain></appMain>
            </div>
       

    </div>
</template>

<script>
	import LayoutHeader from '@/pages/layout/LayoutHeader'
	import SideMenu from '@/pages/layout/SideMenu'
	import AppMain from '@/pages/layout/AppMain'
	export default {
	  data () {
	    return {
	      menuIsSmall: false, // 菜单状态：{true}一级菜单缩放展示,{false}一级菜单正常展示,{默认}false
	      childMenuStatus: false // 分出菜单状态：{true}分出菜单正常显示,{false}分出菜单缩放展示,{默认}false
	    }
	  },
	  components: {
	    LayoutHeader, SideMenu, AppMain
	  },
	  computed: {
	    myMarginLeft () {
	      if (this.menuIsSmall) {
	        if (this.childMenuStatus) {
	          return 230
	        } else {
	          return 50
	        }
	      } else {
	        if (this.childMenuStatus) {
	          return 360
	        } else {
	          return 180
	        }
	      }
	    }
	  },
	  methods: {
	    menu_is_small (status) {
	      this.menuIsSmall = status
	    },
	    menu_child_status (status) {
	      this.childMenuStatus = status
	    }
	  }
	}
</script>


