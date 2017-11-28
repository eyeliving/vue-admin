<template>
    <div id="app">
    		<pageheader></pageheader>
    		<slidemenu @menustatus="menu_is_small" @menuchildstatus="menu_child_status"></slidemenu>
          
          
            
            <div class="main" :style="{ marginLeft: myMarginLeft + 'px' }">
              <!--<slidetaps>:class="{'menu-normal-content':!menuIsSmall,'menu-lg-content':menuIsSmall&&childMenuStatus,'menu-sm-content':menuIsSmall}"</slidetaps>-->
              <router-view class="page-tabs-content fadeIn"></router-view>
            </div>
       

    </div>
</template>

<script>
import pageheader from './components/header'
import slidemenu from './components/menu'
// import slidetaps from './components/slidetaps'
export default {
  data () {
    return {
      menuIsSmall: false, // 菜单状态：{true}一级菜单缩放展示,{false}一级菜单正常展示,{默认}false
      childMenuStatus: false // 分出菜单状态：{true}分出菜单正常显示,{false}分出菜单缩放展示,{默认}false
    }
  },
  components: {
    pageheader, slidemenu
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




