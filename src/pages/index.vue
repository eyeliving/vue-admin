<template>
	<div class="demo">

		<el-form :inline="true" :model="formQuery" class="demo-form-inline">

			<el-form-item label="选择时间">
				<el-col :span="11">
					<el-form-item prop="queryDateBegin">
						<el-date-picker type="date" placeholder="开始时间" v-model="formQuery.queryDateBegin" style="width: 100%;"></el-date-picker>
					</el-form-item>
				</el-col>
				<el-col :span="11">
					<el-form-item prop="queryDateEnd">
						<el-date-picker type="date" placeholder="结束时间" v-model="formQuery.queryDateEnd" style="width: 100%;"></el-date-picker>
					</el-form-item>
				</el-col>
			</el-form-item>

			<el-form-item label="查找用户">
				<el-input placeholder="请输入内容" v-model.trim="formQuery.getInput" @keyup.enter.native="query()" >
				    <el-select v-model="formQuery.selected" slot="prepend" placeholder="请选择" style="width: 90px;">
				      <el-option label="ID" value="1"></el-option>
				      <el-option label="账户" value="2"></el-option>
				    </el-select>
				</el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="query">查询</el-button>
			</el-form-item>
		</el-form>



		<div class="usersLogs">
			<el-table :data="reqList" stripe style="width: 100%">
				<el-table-column prop="id" label="ID" width="80"></el-table-column>
			    <el-table-column prop="username" label="账户" width="120"></el-table-column>
			    <el-table-column prop="create_time" label="请求时间" show-overflow-tooltip></el-table-column>
			    <el-table-column prop="ip" label="IP" width="180"></el-table-column>
			    <el-table-column prop="address" label="地址" width="180"></el-table-column>
			    <el-table-column prop="url" label="URL" width="180"></el-table-column>
			    <el-table-column prop="name" label="error" width="180"></el-table-column>
			    <el-table-column prop="useragent" label="user-agent" show-overflow-tooltip width="240"></el-table-column>
			    <el-table-column label="详细">
			    	<template scope="scope">
				        <el-button size="small" @click="queryDetail(scope.$index, scope.row)">编辑</el-button>
				    </template>
			    </el-table-column>
			</el-table>
			
			<div class="paging">
				<el-pagination @current-change="handleCurrentChange" :current-page.sync="currentPage" :page-size="15" layout="total, prev, pager, next" :total="total"></el-pagination>
			</div>	
		</div>
		
		
	<el-dialog title="详细" :visible.sync="dialogVisible" :before-close="dataDetailClose">
		<el-form label-width="80px">
		    <el-form-item label="ID">{{dataDetail.id}}</el-form-item>
		    <el-form-item label="账户">{{dataDetail.username}}</el-form-item>
		    <el-form-item label="头像"><img :src="dataDetail.avatar" alt="用户头像" class="avatar"/></el-form-item>
		    <el-form-item label="请求时间">{{dataDetail.create_time}}</el-form-item>
		    <el-form-item label="IP">{{dataDetail.ip}}</el-form-item>
		    <el-form-item label="所在地址">{{dataDetail.address}}</el-form-item>
		    <el-form-item label="userAgent"><el-input placeholder="请输入内容" v-model="dataDetail.useragent" :disabled="true"></el-input></el-form-item>
		</el-form>
		<span slot="footer" class="dialog-footer">
		    <el-button @click="dataDetailClose">取 消</el-button>
		    <el-button type="primary" @click="dataDetailClose">确 定</el-button>
	  	</span>
	</el-dialog>
		
		
	</div>
</template>
<script>
export default {
  data () {
    return {
      formQuery: {
        queryDateBegin: '',
        queryDateEnd: '',
        getInput: '',
        selected: ''
      },
      usernameList: [],
      reqList: [],
      currentPage: 1,
      total: 1,
      dataPages: [],
      dialogVisible: false,
      dataDetail: {} // Dialog data

    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    query () {
      var _queryBy = this.formQuery.selected
      var _input = this.formQuery.getInput
      if (!_queryBy) {
        _queryBy = '2' // 默认 根据账户查找
      }
      if (_queryBy === '1') {
        if (isNaN(_input)) {
          return this.$alert('ID查找，请输入数字ID')
        }
      }
      this.axios.get('/api/reqlogs').then((res) => {
        var _arr = res.data.logs
        var _reqList = []
        for (let i = 0; i < _arr.length; i++) {
          let _t0 = new Date(_arr[i].create_time).getTime()
          let _t1 = this.formQuery.queryDateBegin
          let _t2 = this.formQuery.queryDateEnd
          _t1 && (_t1 = new Date(this.formQuery.queryDateBegin).getTime())
          _t2 && (_t2 = new Date(this.formQuery.queryDateEnd).getTime())
          if (_t1 && (_t0 - _t1 < 0)) {
            continue
          }
          if (_t2 && (_t2 - _t0 < 0)) {
            continue
          }
          if (_queryBy === '2') {
            if (_arr[i].username.indexOf(_input) !== -1) {
              _reqList.push(_arr[i])
            }
          } else if (_queryBy === '1') {
            if (_arr[i].id === _input) {
              _reqList.push(_arr[i])
            }
          }
        }
        this.dataPages = _reqList
        this.reqList = _reqList.slice(0, 15)
        this.total = _reqList.length
        this.currentPage = 1
      })
    },
    getData () {
      this.currentPage = 1
      this.axios.get('/api/reqlogs').then((res) => {
        this.dataPages = res.data.logs
        this.reqList = this.dataPages.slice(0, 15)
        this.total = this.dataPages.length
      })
    },
    queryDetail (i, item) {
      this.dialogVisible = true
      this.dataDetail = item
    },
    dataDetailClose () {
      this.dialogVisible = false
      this.dataDetail = {}
    },
    handleCurrentChange (page) {
      this.reqList = this.dataPages.slice((page - 1) * 15, (page - 1) * 15 + 15)
    }
  }
}
</script>
<style scoped>
	.demo {
		margin: 20px 0 0 20px;
	}
	.paging{
		margin-top: 20px;
	}
	.avatar {
		width: 80px;
		height: 80px;
		border-radius: 5px;
	}
</style>