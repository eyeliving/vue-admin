<template>
    <div id="app">
    		<pageheader></pageheader>
    		<slidemenu @menustatus="menu_status"></slidemenu>
          
          
            
            <div class="main" :class="{'menu-normal-content':slide_menu_status===0,'menu-lg-content':slide_menu_status===1,'menu-sm-content':slide_menu_status===2}">
              <!--<slidetaps></slidetaps>-->
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
      slide_menu_status: 0 // 0：一级菜单正常展示  1：分出菜单正常展示  2：一级菜单缩放展示
    }
  },
  components: {
    pageheader, slidemenu
  },
  methods: {
    menu_status (status) {
      this.slide_menu_status = status
    }
  }
}
</script>




