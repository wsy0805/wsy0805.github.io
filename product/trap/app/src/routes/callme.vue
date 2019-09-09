<template>
	<div class="callme">
		<my_map></my_map>
		<div class="callme_cont">
			<span>欢迎怉怊忣忥忦忨忩忪忬忭忮忯，忥忦忨忩忪忬忭忮忯忥忦忨忩忪忬忭忮忯。</span>
		</div>
		<div class="lianxi">
			<span>联系电话：+00 6000 0000（早上9点至晚上6点）</span>
			<span>联系地址：江苏省苏州市工业园区金鸡湖大道路00号</span>
		</div>
	</div>
</template>

<script>
	import my_map from '../comp/my_map.vue'
	export default {
		components:{
			my_map
		}
	}
</script>

<style>
	.callme {
		padding: 0 60px;
		margin: 40px auto;
	}
	.callme span{
		color:#999999;
		font-size: 12px;
		font-family: 宋体;
	}
	.lianxi{
		margin-top:10px;
	}
	.lianxi span{
		display: block;
		line-height:20px;
	}
</style>
