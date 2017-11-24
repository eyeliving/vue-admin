<template>
    <div class="header">
			<div class="topbar-left"></div>
			<div class="topbar-info topbar-right">
				<div class="topbar topbar-notice">
					<a href="#" class="topbar-btn topbar-btn-notice"><span class="topbar-btn-notice-icon icon-bell"></span></a>
				</div>
				<div class="topbar topbar-workorder">
					<a href="#" class="topbar-btn"><span class="">工单</span></a>
				</div>
				<div class="topbar topbar-workorder">
					<a href="#" class="topbar-btn"><span class="">支持</span></a>
				</div>
				<div class="topbar topbar-user">
					<a href="#" class="topbar-btn"><span class="">dev@aliyun.com</span></a>
				</div>
			</div>
	</div>
</template>

<style>
.header{
	height:50px;
	background: #373d41;
    z-index: 100;
    box-sizing: border-box;
    position: fixed;
    clear: both;
    font-size: 12px;
    min-width: 990px;
    width: 100%;
    font-family: "Helvetica Neue", "Luxi Sans", "DejaVu Sans", Tahoma, "Hiragino Sans GB", STHeiti, "Microsoft YaHei";
}
.header .logo{float:left;}
.header .topbar-left{float:left;}
.header .topbar-right{
	float:right;
    z-index: 3;
    color: #fff;
}
.header .topbar{
	min-width: 65px;
	display: inline-block;
	height: 50px;    
	float: left;
}
.header .topbar a{
	line-height: 50px;
    vertical-align: text-bottom;
    border-right: 1px solid #2a2f32;
    display: block;
    padding: 0 16px;
    color: #fff;
    font-size: 14px;
    -webkit-transition: background 0.2s, color 0.2s;
    transition: background 0.2s, color 0.2s;
}
.header .topbar a:hover{
	background: #2a2f32;
}
.header .topbar-notice a{
	font-size: 24px;
}
</style>