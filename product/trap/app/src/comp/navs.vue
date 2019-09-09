<template>
	<div id="my_nav" style="color:#f00;overflow: hidden;">
		<div v-for="i in arr" class="nav_item">
			<a :href="i.path">{{i.title}}</a>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				arr:[
					{title:'首页',path:'#/'},
					{title:'简介',path:'#/info'},
					{title:'博客',path:'#/blog'},
					{title:'相册',path:'#/pics'},
					{title:'联系',path:'#/callme'},
				]
			}
		}
	}
</script>

<style>
	#my_nav{
		display: table;
		width:auto;
		margin:0 auto;
	}
	.nav_item{
		float: left;
		margin:0 20px;
		line-height:40px;
	}
	.nav_item a{
		font: normal normal 14px / 22px "微軟正黑體",Helvetica,Arial,Verdana,sans-serif;
		text-transform: none;
		color:#000;
		text-decoration: none;
	}
</style>
