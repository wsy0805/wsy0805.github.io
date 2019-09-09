<template>
	<div id="index">
		<!-- 轮播图 -->
		<div class="swiper-container" id="index_wrap">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="i in wrap_arr">
					<img :src="i" alt="">
				</div>
			</div>
			<!-- Add Arrows -->
			<div class="swiper-button-next"></div>
			<div class="swiper-button-prev"></div>
			<div class="swiper-pagination"></div>
		</div>
		<!-- 导航 -->
		<div class="index_list">
			<div style="overflow: hidden;margin-right: -20px;">
				<div v-for="i in list_arr" class='index_item'>
					<a :href="i.path">
						<img :src="i.imgurl" alt="">
						<p>{{i.title}}</p>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				wrap_arr: [
					'https://ccdn.goodq.top/caches/1f6a588ef8d15139fc379ea62fde10d4/aHR0cDovLzU2OWM4NGI5Y2I0NTMudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8wMS8yNDNkNzE1YmQwMjE2YzI0OTBhYzM3OTZkMmRhZGMyMC0xMDQ4eDM5Mi5qcGc_p_p100_p_3D.jpg',
					'https://ccdn.goodq.top/caches/1f6a588ef8d15139fc379ea62fde10d4/aHR0cDovLzU2OWM4NGI5Y2I0NTMudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8wMS8yMWEwZjJhMWI0YTFmNDFhMjFmYmFhOGJjNDBlNDk0YS0xMDQ4eDM5Mi5qcGc_p_p100_p_3D.jpg',
					'https://ccdn.goodq.top/caches/1f6a588ef8d15139fc379ea62fde10d4/aHR0cDovLzU2OWM4NGI5Y2I0NTMudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNi85ZDIyZTNmNjcwNmYxNGY2YjkyZjc4MGVlOTdlN2RiZC0xMDI0eDM4My5qcGc_p_p100_p_3D.jpg',
				],
				list_arr:[
					{path:'#/info',title:'About',imgurl:'https://ccdn.goodq.top/caches/1f6a588ef8d15139fc379ea62fde10d4/aHR0cDovLzU2OWM4NGI5Y2I0NTMudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8wMS9mMmQ3MGRkZDBlMzk2YzMyYTI1OWQyZDI3YjA5NjNiNi00MDB4NDAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg'},
					{path:'#/pics',title:'Gallery',imgurl:'https://ccdn.goodq.top/caches/1f6a588ef8d15139fc379ea62fde10d4/aHR0cDovLzU2OWM4NGI5Y2I0NTMudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8wMS84NmFlMmU1MGJmMjUwMDc2ZTc2Y2VjNDMzYzA1MDMyYi00MDB4NDAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg'},
					{path:'#/callme',title:'Contact',imgurl:'https://ccdn.goodq.top/caches/1f6a588ef8d15139fc379ea62fde10d4/aHR0cDovLzU2OWM4NGI5Y2I0NTMudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8wMS80NzJmMTIxNTQzZTRiZGFmZDRlZDUxOTNhOGFhNTk0Mi00MDB4NDAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg'},
				]
			}
		},
		mounted() {
			var swiper = new Swiper('.swiper-container', {
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
				loop: true,
				pagination: {
					el: '.swiper-pagination',
					clickable :true,
				},
			});
		}
	}
</script>

<style>
	#index_wrap {
		width: 100%;
		height: 364px;
	}

	.swiper-container {
		width: 100%;
		height: 100%;
		margin:20px auto;
	}

	.swiper-slide {
		text-align: center;
		font-size: 18px;
		background: #fff;
		/* Center slide text vertically */
		display: -webkit-box;
		display: -ms-flexbox;
		display: -webkit-flex;
		display: flex;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		-webkit-justify-content: center;
		justify-content: center;
		-webkit-box-align: center;
		-ms-flex-align: center;
		-webkit-align-items: center;
		align-items: center;
	}

	.swiper-slide img {
		width: 100%;
		height: 100%;
	}
	.swiper-button-next,.swiper-button-prev{
		width:32px !important;
		height:32px !important;
		/* font-size:12px !important; */
		background: #151515 !important;
		color:#fff !important;
		border-radius: 4px !important;
	}
	.swiper-button-next:before,.swiper-button-prev:before{
		content: '>';
		text-align: center;
		line-height: 32px;
		padding:0 10px;
	}
	.swiper-button-prev:before{
		content: '<';
	}
	.swiper-pagination-bullet{
		background: #ccc !important;
	}
	.swiper-pagination-bullet-active{
		background: #fff !important;
	}
	.index_list{
		/* background:deepskyblue; */
		min-height: 200px;
		overflow: hidden;
	}
	.index_item{
		float: left;
		margin-right:16px;
	}
	.index_item a{
		float: left;
		text-decoration: none;
		color:rgb(102,102,102);
		font-size:14px;
		font-family:verdana;
	}
	.index_item img{
		width:330px;
		height:330px;
	}
	.index_item p{
		text-align: center;
		line-height:30px;
	}
</style>
