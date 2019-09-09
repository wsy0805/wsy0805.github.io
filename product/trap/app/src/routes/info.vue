<template>
	<div id="info">
		<div class="info_bg">
			<img :src="bgsrc" alt="">
		</div>
		<div class="info_cont">
			<h3>关于我们...</h3>
			<div class="info_text">
				<p>枛朸桸桹桺奿妀恂恃恄恅，恒恇恈恉恌恍恎恏恑恒恓恔恖恚恛恜恝恞！恠恡忣忥忬忭忮忯忰忱忲忳。忴念忶汹忸忹忺忻忼忾忿怂，怃怄怅怏怐怑怓怡怢怣怤，怬怭怮怯怲怳怴怵怷怸怹怺怼恀恂恃恄恅恒忢怲怳怴恅恒忢忣忥！忦忨忲忳忴念忹忺忻忼忾忿怂，怃怄怅怆怇怈怉怊怋怌怍応损忨忲忳忴念忹忺忻忼忨忲忳忴念忹忺忻忼忨忲忳忴念忹忺忻忼忨忲忳忴念忹忺忻忼忨忲忳忴念忹忺忻忼忨忲忳忴念忹忺忻忼忨忲忴念忹忺忻忼忨</p>
				<p>枛朸桸桹桺奿妀恂恃恄恅恒恇恈恉恌恍恎恏。恑恒恓恔恖恚恛恜恝恞恠恡忣忥忦忨忩忪忬忭忮忯忰忱忲忳。忴念忶汹忸忹忺忻忼忾忿怂，怃怄怅怆 怇怈怉怊忣忥忦忨忩忪忬忭忮忯忰忱忲忳忴念 忶汹忸忹忺忻忼忾忿怂，怃怄怅怆怇怈怉怊怋怌怍応损捠捡换攴朰朲朳枛朸桸桹桺奿圧圩圪囡咍朰朲朳枛朸！妀恂恃恄恅恒恇恈恉恊恌恍恎恏恑恒圧圩圪囡忱忲忳忴念忶汹忸忹忺忻忼忾忿怂。</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				bgsrc:'https://ccdn.goodq.top/caches/1f6a588ef8d15139fc379ea62fde10d4/aHR0cHM6Ly81NjljODRiOWNiNDUzLnQ3NC5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDEvNjNmM2RkNmUwYTEwOWQyNmQ0MWI5NmMzNmE1NzQ5YTYuanBn.jpg',
				
			}
		}
	}
</script>

<style>
	#info{
		padding:20px 40px 40px 40px;
	}
	.info_bg{
		width:100%;
		height: 340px;
	}
	.info_bg img{
		width:100%;
		height:100%;
	}
	.info_cont{
		min-height:300px;
		padding:20px 0 0 0;
	}
	.info_cont h3{
		color:#808080;
		font-size:18px;
		font-weight:normal;
	}
	.info_text{
		overflow: hidden;
		display: flex;
	}
	.info_text p{
		background: #fff;
		width:calc(100% / 2);
		font-size:12px;
		flex: 1;
		padding:0 10px;
		color:#999;
		line-height:30px;
		margin:20px 0;
	}
	.info_text p:nth-of-type(1){
		text-indent: 4em;
	}
</style>
