<template>
    <div>
    
        <div page="page" class="inqiu-paging">
        
            <ul class="inqiu-paging-ul" @click="pageJump">
                    <li><span class="fa fa-fast-backward" :class="{'sdisabled':currentPage==1||currentPage==0}" go="pres"></span></li>
                    <li><span class="fa fa-backward" :class="{'sdisabled':currentPage==1||currentPage==0}" go="pre"></span></li>
                    <li><input type="text" class="iinput iinput40" v-model="currentPage" maxlength="7"/></li>
                    <li><span class="fa fa-forward" :class="{'sdisabled':currentPage>=pageTotal}" go="next"></span></li>
                    <li><span class="fa fa-fast-forward" :class="{'sdisabled':currentPage>=pageTotal}" go="nexts"></span></li>
                    <li><select class="form-control" v-model="selectSize" @change="selectPageSize"><option value="10">10</option><option value="20">20</option><option value="30">30</option><option value="50">50</option><option value="100">100</option><option value="1000">1000</option></select></li>
                    <li class="pagingmsg">页数：{{ pageTotal }}&nbsp;&nbsp;總記錄數：{{ total }}</li>
		        </ul>

        </div>

    </div>
</template>
<script>
export default {
  name: 'inqiuPage',
  props: {
    currentPage: Number, // 当前页
    pageSize: Number,
    total: Number
  },
  watch: {
    total (val) {
      this.pageTotal = Math.ceil(this.total / this.pageSize)
    },
    pageSize (val) {
      console.log('---------' + val)
      this.selectSize = val
    }
  },
  // computed: {
  //   pageSize () {

  //   }
  // },
  data () {
    return {
      selectSize: 0,
      pageTotal: 0
      // total: 1000 // 总条数
    }
  },
  methods: {
    pageJump (event) {
      const target = event.target
      if (target.tagName === 'UL') {
        return
      }
      let page = this.currentPage
      let go = event.target.getAttribute('go')
      switch (go) {
        case 'pre':
          page > 1 && page--
          break
        case 'pres':
          page !== 1 && (page = 1)
          break
        case 'next':
          page < this.pageTotal && page++
          break
        case 'nexts':
          page = this.pageTotal
          break
      }
      this.$emit('paging-action', page)
    },
    selectPageSize (e) {
      console.log(e.target.value)
      this.$emit('update:page-size', Number(e.target.value))
      // this.pageSize = e.target.value
    }
  }
}
</script>