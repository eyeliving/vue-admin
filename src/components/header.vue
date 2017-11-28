<template>
    <div class="header">
			<div class="topbar-left">
				<div class="topbar">
					<a href="javascript:;" target="_blank" class="topbar-logo">
				        <span class="icon-logo-new"></span>
				    </a>
				</div>
				<div class="topbar">
					<a href="javascript:;" target="_blank" class="topbar-btn">
				        <span>管理控制台</span>
				    </a>
				</div>
				<div class="topbar" :class="{'open':serviceIsShow}">
					<div class="topbar topbar-service" @click="openService()">
						<a href="javascript:;">
				        	<span>产品与服务</span>
				        	<span class="icon-arrow-down"></span>
				    	</a>
					</div>
					<div class="topbar-product-dropdown topbar-show" v-show="serviceIsShow">
						<div class="topbar-product-container topbar-clearfix">
							<div class="topbar-product-history topbar-left" v-if="recentHistoryList && recentHistoryList.length > 0">
								<div class="topbar-product-title">最近访问</div>
								<ul class="topbar-product-history-list">
									
									<li v-for="history in recentHistoryList">
										<a target="_self" href="javascript:;">
											<i class="icon-ecs"></i> {{history.name}}
										</a>
									</li>
								</ul>
							</div>
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          <div class="topbar-product-category-box" :class="{'has-product-history': recentHistoryList && recentHistoryList.length > 0}">
            <div class="topbar-product-hd">
              <div class="topbar-product-search">
                <input class="topbar-transition" type="text" placeholder="请输入关键词">
                <a class="icon-search topbar-product-search-icon" href="javascript:;">
                  <span></span>
                </a>
              </div>
            </div>
            <div class="waterfall-container">
				<div class="waterfall-group">
			        <div class="waterfall-group-wrapper">
			        	<dl>
			        		<dt>弹性计算</dt>
			        		<dd id="ecs"><a target="_blank" href="javascript:;" title="云服务器 ECS">云服务器 ECS</a></dd>
			        		<dd id="ecs"><a target="_blank" href="javascript:;" title="云服务器 ECS">云服务器 ECS</a></dd>
			        		<dd id="ecs"><a target="_blank" href="javascript:;" title="云服务器 ECS">云服务器 ECS</a></dd>
			        		<dd id="ecs"><a target="_blank" href="javascript:;" title="云服务器 ECS">云服务器 ECS</a></dd>
			        		<dd id="ecs"><a target="_blank" href="javascript:;" title="云服务器 ECS">云服务器 ECS</a></dd>
			        	</dl>
			        </div>
			    </div>
			    <div class="waterfall-group">
			        <div class="waterfall-group-wrapper">
			        	<dl>
			        		<dt>弹性计算</dt>
			        		<dd id="ecs"><a target="_blank" href="javascript:;" title="云服务器 ECS">云服务器 ECS</a></dd>
			        		<dd id="ecs"><a target="_blank" href="javascript:;" title="云服务器 ECS">云服务器 ECS</a></dd>
			        		<dd id="ecs"><a target="_blank" href="javascript:;" title="云服务器 ECS">云服务器 ECS</a></dd>
			        		<dd id="ecs"><a target="_blank" href="javascript:;" title="云服务器 ECS">云服务器 ECS</a></dd>
			        		<dd id="ecs"><a target="_blank" href="javascript:;" title="云服务器 ECS">云服务器 ECS</a></dd>
			        	</dl>
			        </div>
			    </div>
			    <div class="waterfall-group">
			        <div class="waterfall-group-wrapper">
			        	<dl>
			        		<dt>弹性计算</dt>
			        		<dd id="ecs"><a target="_blank" href="javascript:;" title="云服务器 ECS">云服务器 ECS</a></dd>
			        		<dd id="ecs"><a target="_blank" href="javascript:;" title="云服务器 ECS">云服务器 ECS</a></dd>
			        		<dd id="ecs"><a target="_blank" href="javascript:;" title="云服务器 ECS">云服务器 ECS</a></dd>
			        		<dd id="ecs"><a target="_blank" href="javascript:;" title="云服务器 ECS">云服务器 ECS</a></dd>
			        		<dd id="ecs"><a target="_blank" href="javascript:;" title="云服务器 ECS">云服务器 ECS</a></dd>
			        	</dl>
			        </div>
			    </div>
			    <div class="waterfall-group">
			        <div class="waterfall-group-wrapper">
			        	<dl>
			        		<dt>弹性计算</dt>
			        		<dd id="ecs"><a target="_blank" href="javascript:;" title="云服务器 ECS">云服务器 ECS</a></dd>
			        		<dd id="ecs"><a target="_blank" href="javascript:;" title="云服务器 ECS">云服务器 ECS</a></dd>
			        		<dd id="ecs"><a target="_blank" href="javascript:;" title="云服务器 ECS">云服务器 ECS</a></dd>
			        		<dd id="ecs"><a target="_blank" href="javascript:;" title="云服务器 ECS">云服务器 ECS</a></dd>
			        		<dd id="ecs"><a target="_blank" href="javascript:;" title="云服务器 ECS">云服务器 ECS</a></dd>
			        	</dl>
			        </div>
			    </div>
			    <div class="waterfall-group">
			        <div class="waterfall-group-wrapper">
			        	<dl>
			        		<dt>弹性计算</dt>
			        		<dd id="ecs"><a target="_blank" href="javascript:;" title="云服务器 ECS">云服务器 ECS</a></dd>
			        		<dd id="ecs"><a target="_blank" href="javascript:;" title="云服务器 ECS">云服务器 ECS</a></dd>
			        		<dd id="ecs"><a target="_blank" href="javascript:;" title="云服务器 ECS">云服务器 ECS</a></dd>
			        		<dd id="ecs"><a target="_blank" href="javascript:;" title="云服务器 ECS">云服务器 ECS</a></dd>
			        		<dd id="ecs"><a target="_blank" href="javascript:;" title="云服务器 ECS">云服务器 ECS</a></dd>
			        	</dl>
			        </div>
			    </div>
			    <div class="waterfall-group">
			        <div class="waterfall-group-wrapper">
			        	<dl>
			        		<dt>弹性计算</dt>
			        		<dd id="ecs"><a target="_blank" href="javascript:;" title="云服务器 ECS">云服务器 ECS</a></dd>
			        		<dd id="ecs"><a target="_blank" href="javascript:;" title="云服务器 ECS">云服务器 ECS</a></dd>
			        		<dd id="ecs"><a target="_blank" href="javascript:;" title="云服务器 ECS">云服务器 ECS</a></dd>
			        		<dd id="ecs"><a target="_blank" href="javascript:;" title="云服务器 ECS">云服务器 ECS</a></dd>
			        		<dd id="ecs"><a target="_blank" href="javascript:;" title="云服务器 ECS">云服务器 ECS</a></dd>
			        	</dl>
			        </div>
			    </div>
			    <div class="waterfall-group">
			        <div class="waterfall-group-wrapper">
			        	<dl>
			        		<dt>弹性计算</dt>
			        		<dd id="ecs"><a target="_blank" href="javascript:;" title="云服务器 ECS">云服务器 ECS</a></dd>
			        		<dd id="ecs"><a target="_blank" href="javascript:;" title="云服务器 ECS">云服务器 ECS</a></dd>
			        		<dd id="ecs"><a target="_blank" href="javascript:;" title="云服务器 ECS">云服务器 ECS</a></dd>
			        		<dd id="ecs"><a target="_blank" href="javascript:;" title="云服务器 ECS">云服务器 ECS</a></dd>
			        		<dd id="ecs"><a target="_blank" href="javascript:;" title="云服务器 ECS">云服务器 ECS</a></dd>
			        	</dl>
			        </div>
			    </div>
			    <div class="waterfall-group">
			        <div class="waterfall-group-wrapper">
			        	<dl>
			        		<dt>弹性计算</dt>
			        		<dd id="ecs"><a target="_blank" href="javascript:;" title="云服务器 ECS">云服务器 ECS</a></dd>
			        		<dd id="ecs"><a target="_blank" href="javascript:;" title="云服务器 ECS">云服务器 ECS</a></dd>
			        		<dd id="ecs"><a target="_blank" href="javascript:;" title="云服务器 ECS">云服务器 ECS</a></dd>
			        		<dd id="ecs"><a target="_blank" href="javascript:;" title="云服务器 ECS">云服务器 ECS</a></dd>
			        		<dd id="ecs"><a target="_blank" href="javascript:;" title="云服务器 ECS">云服务器 ECS</a></dd>
			        	</dl>
			        </div>
			    </div>
			    <div class="waterfall-group">
			        <div class="waterfall-group-wrapper">
			        	<dl>
			        		<dt>弹性计算</dt>
			        		<dd id="ecs"><a target="_blank" href="javascript:;" title="云服务器 ECS">云服务器 ECS</a></dd>
			        		<dd id="ecs"><a target="_blank" href="javascript:;" title="云服务器 ECS">云服务器 ECS</a></dd>
			        		<dd id="ecs"><a target="_blank" href="javascript:;" title="云服务器 ECS">云服务器 ECS</a></dd>
			        		<dd id="ecs"><a target="_blank" href="javascript:;" title="云服务器 ECS">云服务器 ECS</a></dd>
			        		<dd id="ecs"><a target="_blank" href="javascript:;" title="云服务器 ECS">云服务器 ECS</a></dd>
			        	</dl>
			        </div>
			    </div>
			    <div class="waterfall-group">
			        <div class="waterfall-group-wrapper">
			        	<dl>
			        		<dt>弹性计算</dt>
			        		<dd id="ecs"><a target="_blank" href="javascript:;" title="云服务器 ECS">云服务器 ECS</a></dd>
			        		<dd id="ecs"><a target="_blank" href="javascript:;" title="云服务器 ECS">云服务器 ECS</a></dd>
			        		<dd id="ecs"><a target="_blank" href="javascript:;" title="云服务器 ECS">云服务器 ECS</a></dd>
			        		<dd id="ecs"><a target="_blank" href="javascript:;" title="云服务器 ECS">云服务器 ECS</a></dd>
			        		<dd id="ecs"><a target="_blank" href="javascript:;" title="云服务器 ECS">云服务器 ECS</a></dd>
			        	</dl>
			        </div>
			    </div>
			    <div class="waterfall-group">
			        <div class="waterfall-group-wrapper">
			        	<dl>
			        		<dt>弹性计算</dt>
			        		<dd id="ecs"><a target="_blank" href="javascript:;" title="云服务器 ECS">云服务器 ECS</a></dd>
			        		<dd id="ecs"><a target="_blank" href="javascript:;" title="云服务器 ECS">云服务器 ECS</a></dd>
			        		<dd id="ecs"><a target="_blank" href="javascript:;" title="云服务器 ECS">云服务器 ECS</a></dd>
			        		<dd id="ecs"><a target="_blank" href="javascript:;" title="云服务器 ECS">云服务器 ECS</a></dd>
			        		<dd id="ecs"><a target="_blank" href="javascript:;" title="云服务器 ECS">云服务器 ECS</a></dd>
			        	</dl>
			        </div>
			    </div>

			    
            </div>
          </div>
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          					<div class="topbar-product-close" @click="serviceIsShow = !serviceIsShow">
					            <span class="icon-double-arrow">
					              <i></i>
					              <i></i>
					            </span>
					        </div>
					        
						</div>
					</div>
				</div>
			</div>
			<div class="topbar-info topbar-right">
				<div class="topbar topbar-notice">
					<a href="#"><span class="topbar-btn-notice-icon icon-bell"></span></a>
				</div>
				<div class="topbar topbar-workorder">
					<a href="#"><span class="">工单</span></a>
				</div>
				<div class="topbar topbar-workorder">
					<a href="#"><span class="">支持</span></a>
				</div>
				<div class="topbar topbar-user">
					<a href="#"><span class="">dev@aliyun.com</span></a>
				</div>
			</div>
	</div>
</template>
<script>
  export default {
    data () {
      return {
        serviceIsShow: false,
        recentHistoryList: [] // 本地访问历史
      }
    },
    methods: {
      openService () {
        var recentHistoryList = localStorage.getItem('recent_history_list')
        recentHistoryList = recentHistoryList ? JSON.parse(recentHistoryList) : []
        this.serviceIsShow = !this.serviceIsShow
        this.recentHistoryList = recentHistoryList.reverse()
      }
    }
  }
</script>
<style>
.header{
	height:50px;
	background: #373d41;
    z-index: 101;
    box-sizing: border-box;
    position: fixed;
    clear: both;
    font-size: 12px;
    min-width: 990px;
    width: 100%;
    font-family: "Helvetica Neue", "Luxi Sans", "DejaVu Sans", Tahoma, "Hiragino Sans GB", STHeiti, "Microsoft YaHei";
}
.header .topbar-left{
	float:left;
	font-size: 0;
}
.header .topbar-right{
	float:right;
    color: #fff;
}
.header .topbar-right .topbar{
	min-width: 65px;
	display: inline-block;
	height: 50px;    
	float: left;
}
.header .topbar-right .topbar>a{
    border-right: 1px solid #2a2f32;
    padding: 0 16px;
    -webkit-transition: background 0.2s, color 0.2s;
    transition: background 0.2s, color 0.2s;
}
.header .topbar>a:hover{
	background: #2a2f32;
}
.header .topbar-right .topbar-notice>a{
	font-size: 24px;
}
.header .topbar>a{
	line-height: 50px;
    vertical-align: text-bottom;
    display: block;
    padding: 0 16px;
    color: #fff;
    font-size: 14px;
    text-align: center;
}
.header .topbar{
	display: inline-block;
	vertical-align: top;
}
.header .topbar-left .topbar-logo {
    display: block;
    width: 50px;
    font-size: 24px !important;
    text-align: center;
    margin-right: 1px;
}
.header .topbar-left .topbar-btn{
	font-size: 14px;
	margin-right: 1px;
    width: 128px;
}
.header .topbar-left .topbar-service{
    width: 130px;
}
.header .topbar-left .open li a{
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    letter-spacing: 0.02em;
}
.header .topbar-left .icon-arrow-down {
    display: inline-block;
    width: 18px;
    text-align: center;
    vertical-align: middle;
    transition: transform 0.2s, vertical-align 0.2s;
    -o-transition: transform 0.2s, vertical-align 0.2s;
    -ms-transition: transform 0.2s, vertical-align 0.2s;
    -moz-transition: transform 0.2s, vertical-align 0.2s;
    -webkit-transition: transform 0.2s, vertical-align 0.2s;
}
.header .topbar-left .open {
	position: relative;
}
.header .topbar-left .open .icon-arrow-down {
    vertical-align: text-top;
    transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
    -moz-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    -o-transform: rotate(180deg);
}
.header .topbar-left .open .topbar-service a{
    color: #333;
    background: #fff;
}
.topbar-product-dropdown {
    position: fixed;
    right: 0;
    left: 0;
    border: none;
    margin: 0;
}
.topbar-product-container {
    position: absolute;
    min-height: 300px;
    left: 0;
    right: 0;
    background-color: #fff;
    -o-transition: all 0.15s, 0.15s;
    -moz-transition: all 0.15s, 0.15s;
    -webkit-transition: all 0.15s, 0.15s;
    transition: all 0.15s, 0.15s;
    -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.topbar-clearfix:before, .topbar-clearfix:after {
    display: table;
    content: " ";
}
.topbar-product-history {
    width: 180px;
    height: 100%;
    padding: 16px;
    border-right: 1px solid #f1f1f1;
    background-color: #F5F5F6;
    position: absolute;
}
.topbar-product-title {
    font-size: 14px;
    margin: 8px 8px 16px 10px;
}
.topbar-product-history ul.topbar-product-history-list {
    margin: 0;
    padding: 0;
    list-style: none;
}
.topbar-product-history ul.topbar-product-history-list li {
    height: 32px;
    line-height: 32px;
    padding-left: 10px;
    margin-bottom: 8px;
    background: #fff;
    -o-transition: all 0.15s, 0s;
    -moz-transition: all 0.15s, 0s;
    -webkit-transition: all 0.15s, 0s;
    transition: all 0.15s, 0s;
}
.topbar-product-history ul.topbar-product-history-list li a {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #373D41;
    background-color: #fff;
    font-size: 12px;
    display: block;
}
.topbar-product-history ul.topbar-product-history-list li:hover {
    background: #00c1de;
}
.topbar-product-history ul.topbar-product-history-list li:hover a {
    color: #fff;
    background: #00c1de;
}
.topbar-product-history ul.topbar-product-history-list li i {
    font-size: 14px;
    vertical-align: middle;
}
.header .topbar-product-close {
    position: absolute;
    left: 50%;
    bottom: -24px;
    width: 140px;
    height: 24px;
    margin-left: -25px;
    text-align: center;
    line-height: 24px;
    background: #fff;
    cursor: pointer;
    -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    color: #666;
    -o-transition: all 0.15s, 0.15s;
    -moz-transition: all 0.15s, 0.15s;
    -webkit-transition: all 0.15s, 0.15s;
    transition: all 0.15s, 0.15s;
}
.header .topbar-product-close .icon-double-arrow {
    display: inline-block;
    margin-top: 8px;
}
.header .topbar-product-close .icon-double-arrow i {
    display: block;
    border: 1px solid #333;
    width: 8px;
    height: 8px;
    border-bottom: none;
    border-left: 0;
    background-color: transparent;
    transform: rotate(-45deg);
}
.header .topbar-product-close .icon-double-arrow i:first-child {
    margin-bottom: -3px;
}
.header .has-product-history {
    margin-left: 180px;
}
.header .topbar-product-category-box {
    padding: 24px 12px;
    background-color: #fff;
}
.header .topbar-product-category-box .topbar-product-hd {
    position: relative;
    margin-bottom: 20px;
}
.header .topbar-product-category-box .topbar-product-search {
    width: 600px;
    position: relative;
    margin: 0 auto;
}
.header .topbar-product-category-box .topbar-product-search input {
    width: 100%;
    padding-left: 10px;
    padding-right: 28px;
    padding-bottom: 7px;
    border: none;
    font-size: 18px;
    opacity: 0.3;
    color: #666;
    border-bottom: 2px solid #E3E6E9;
    background-color: transparent;
    display: block;
    height: 32px;
    outline: 0;
    line-height: 32px;
}
.header .topbar-product-category-box .topbar-product-search input:focus{
	border-bottom: 2px solid #00C1DE;
	opacity: 0.8;
}
.header .topbar-product-category-box .topbar-product-search-icon {
    position: absolute;
    right: 10px;
    top: 50%;
    color: #373D41;
    font-size: 20px;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    padding-bottom: 7px;
}
.header .topbar-transition {
    -o-transition: all 0.2s, 0.05s;
    -moz-transition: all 0.2s, 0.05s;
    -webkit-transition: all 0.2s, 0.05s;
    transition: all 0.2s, 0.05s;
}
.header .waterfall-group {
    float: left;
    padding: 0 4px;
    min-width: 120px;
}
.header .waterfall-group .waterfall-group-wrapper{
	font-size: 12px;
}
.waterfall-group-wrapper dt {
    line-height: 28px;
    color: #999;
    background-color: #f0f0f0;
    padding: 0 8px;
    font-weight: 400;
}
.topbar-product-category-box .waterfall-group-wrapper dd a {
    display: block;
    padding: 0 8px;
    line-height: 28px;
    height: 28px;
    background: #f5f5f6;
    color: #373D41;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.waterfall-group-wrapper dd a:hover {
    background: #00C1DE;
    color: #fff;
}
</style>