// 轮播图
var url="http://api.cimns.com:8081/QQMusic/";
var imgListMargin = 24;
$.ajax({
	url:url+'focus',
	dataType:'json',
	success:function(data){
		var arr=data.data.list;
		var picnum=0;
		$.each(arr,function(index,item){
			var oimg=new Image();
			oimg.src=item.pic_info.url;
			oimg.onload=function(){
				picnum++;
				if(picnum == arr.length){
					
					//创建
					$.each(arr, function(i,o){
						//图片
						var li = $('<div class="swiper-slide"></div>');
						li.append($('<img>').attr('src', o.pic_info.url));
						$('.in-banner .swiper-wrapper').append(li);
						// //点
						// var dotLi = $('<li>');
						// if(i == 0) dotLi.addClass('active');
						// $('.in-banner ol').append(dotLi);
					})

					//swiper
					var mySwiper = new Swiper ('.in-banner', {
						// direction: 'vertical', // 垂直切换选项
						loop: true, // 循环模式选项
						speed: 300, //动画的执行事件
						autoplay: {
							delay: 3000
						},

						// 如果需要分页器
						pagination: {
						  el: '.swiper-pagination',
						},
					})  
				}
			}	
		})
	}
})
$.ajax({
	url:url+'hotrecom',
	dataType:'json',
	type:'get',
	success:function(rel){
		console.log(rel);
		var arr = rel.data;
		$.each(arr, function(i,o){
			// console.log(o);
			var oDiv = $('<div class=" swiper-slide img-item">');
			// console.log(i>5?'none':'block');
			//把后面所需要的数据存到点击的item中
			oDiv.attr('disstid', o.content_id)
				.attr('img', o.cover)
				.attr('title',o.title);
			oDiv.html(
				`<div class="img-box">
					<img src="${o.cover}" alt="">
					<i class="font icon-qq" style="display: ${i>5?'none':'block'}">&#xe616;</i>
					<span class="img-tip"><i class="font">&#xe61a;</i>${o.listen_num>100000000?(o.listen_num/100000000).toFixed(2) + '亿': o.listen_num>10000?(o.listen_num/10000).toFixed(2) + '万': o.listen_num}</span>
				</div>
				<p>${o.title}</p>`);
			i>5?$('.img-list-cont').eq(1).append(oDiv):$('.img-list-cont').eq(0).append(oDiv);
			// $('.img-list-cont').append(oDiv);
		})
		//swiper
		var mySwiper = new Swiper ('.img-list', {
			slidesPerView: 3.3,
			spaceBetween: 40,
			slidesOffsetBefore: imgListMargin,
			slidesOffsetAfter: imgListMargin,
			speed: 300,
			preventClicksPropagation: true
		}) 
	}
})
//点击的时候去请求歌单
$('.img-list-cont').on('click','.img-item', function(){
	//让当前首页向左移动三分之一
	$('.index').css({
		'transition': '.4s',
		'transform': 'translateX(-3.3rem)'
	})
	//播放器 下去
	$('.gl-tab').css({
		'transition': '.4s',
		'transform': `translateY(${$('.gl-icon-box').outerHeight(true)}px)`
	})
	//列表页完全覆盖到屏幕中
	$('.gl-list').css({
		'transition': '.4s',
		'transform': 'translateX(0)'
	})
	//背景图
	$('.list-header').css({
		'backgroundImage': 'url('+$(this).attr('img')+')'
	})
	$('.gl-list .menu-title').html($(this).attr('title'))
	$.ajax({
		url: url + 'playlist/detail',
		dataType: 'json',
		data: {
			disstid: $(this).attr('disstid')
		},
		success: function(res){
			// console.log(res);
			//为下一次数据做准备
			$('.music-list').empty();
			//列表
			var arr = res.songlist;
			$('.play-counts').html(arr.length)
			$.each(arr, function(i,o){
				var lis = $('<li>');
				lis.attr('mid', o.songmid)
					.attr('singermid', o.singer[0].mid)
					.attr('songname', o.songname)
					.attr('singername', o.singer[0].name);
				lis.append($('<span>').html(i+1))
					.append($('<div class="mu-text">')
							.append($('<p class="mu-title">').html(o.songname))
							.append($('<p class="mu-cont">')
									.append($('<i class="font icon-Dj">&#xe61c;</i>'))
									.append($(issq(o)))
									.append($('<span>').html(o.singer[0].name+'·'+o.albumname))
								)
						)
					.append($('<i class="font icon-Video">&#xe6bf;</i>'))
					.append($('<i class="font icon-more">&#xe604;</i>'));
				if(!o.vid) lis.find('.icon-Video').hide();
				if(!o.isonly) lis.find('.icon-Dj').hide();
				$('.music-list').append(lis);
			})
		}
	})
})
//判断是sq无损还是hq高清
function issq(o){
	if(o.sizeflac!=0) return '<i class="font icon-Sq">&#xe60c;</i>';
	else if(o.size320!=0) return '<i class="font icon-Hq">&#xe8ab;</i>';
}
//播放列表页面 返回
$('.back-btn').on('click', function(){
	//让当前首页向左移动三分之一
	$('.index').css({
		'transition': '.4s',
		'transform': 'translateX(0)'
	})
	//播放器 下去
	$('.gl-tab').css({
		'transition': '.4s',
		'transform': `translateY(0)`
	})
	//列表页完全出去到屏幕中
	$('.gl-list').css({
		'transition': '.4s',
		'transform': 'translateX(100%)'
	})
	$('.gl-rank').css({
		'transition': '.4s',
		'transform': 'translateX(100%)'
	})
	$('.music-list').empty('slow');
})
$('body').on('scroll',function(){
	// console.log(111);
	
	var meter=$('body').scrollTop();
	// console.log(meter)
	$('.menu').css({
		'transform':'translateY('+meter+'px)'
	})
	$('.rank-header').css({
		'transform':'translateY('+meter+'px)'
	})
	$('.menus').children('.menu-titles').css({
		'opacity':1
	})
	$('.menus').css({
		'transform':'translateY('+meter+'px)'
	})
	if(meter==0){
		$('.menus').children('.menu-titles').css({
			'opacity':0
		})
	}
})
