<template>
	<div id="app">
		<div class="app_head">
			<h1>旅 行 日 記</h1>
			<div class="head_nav">
				<my_nav></my_nav>
			</div>
		</div>
		<div class='app_cont'>
			<router-view></router-view>
		</div>
		<div class="app_foot">
			<div>
				<img :src="pic" alt="">
			</div>
			<p><span>Copyright ©2005-2016</span> <span>Personal Website</span></p>
		</div>
	</div>
</template>

<script>
	import my_nav from './comp/navs.vue'
	export default {
		name: 'app',
		data() {
			return {
				pic: 'https://ccdn.goodq.top/caches/1f6a588ef8d15139fc379ea62fde10d4/aHR0cHM6Ly81NjljODRiOWNiNDUzLnQ3NC5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDEvNDAwMjY1M2Y5NzFjYjBhN2FmYzExNjlkMjkwNjkxYWEtMTY4eDEyNi5wbmc_p_p100_p_3D.png'
			}
		},
		components: {
			my_nav
		}
	}
</script>

<style>
	* {
		padding: 0;
		margin: 0;
		list-style: none;
		user-select: none;
	}

	#app {
		max-width: 1020px;
		margin: 0 auto;
		min-height: 800px;
		/* background: #ccc; */
	}

	.app_head {
		min-height: 100px;
		background: #fff;
		width: 100%;
	}

	.app_head h1 {
		font-size: 28px;
		color: rgb(128, 128, 128);
		font-family: '微软雅黑';
		cursor: pointer;
		text-align: center;
		font-weight: normal;
		padding: 10px 0;
	}

	.head_nav {
		overflow: hidden;
		border-top: 1px solid #BABABA;
		border-bottom: 1px solid #bababa;
		margin: 10px 0;
	}

	.app_cont {
		min-height: 500px;
	}

	.app_foot {
		min-height: 200px;
		background: #fff;
		text-align: center;
		padding: 30px 0;
	}

	.app_foot p {
		margin: 20px 0;
	}

	.app_foot p span:nth-of-type(1) {
		font-family: sans-serif, Arial, Verdana, 'Trebuchet MS';
		font-size: 13px;
		line-height: 20.8px;
		color: rgb(169, 169, 169);
	}

	.app_foot p span:nth-of-type(2) {
		color: rgb(169, 169, 169);
		font-size: 13px;
		line-height: 20.8px;
		font-family: 微软雅黑;
	}
</style>
