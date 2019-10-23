$('.rank').on('click',function(){
	$('.index').css({
		'transition': '.4s',
		'transform': 'translateX(-3.3rem)'
	});
	$('.gl-tab').css({
		'transition': '.4s',
		'transform': `translateY(${$('.gl-icon-box').outerHeight(true)}px)`
	});
	$('.gl-rank').show(400).css({
		'transition': '.4s',
		'transform': 'translateX(0)',
	})
})
$.ajax({
	url:'http://api.cimns.com:8081/QQMusic/ranktop',
	dataType:'json',
	success:function(data){
		// console.log(data.data)
		var datalistone=data.data[0].list;
		// console.log(datalistone)
		$.each(datalistone,function(index,item){
			var odiv=$('<div class="m-dfcont-item">');
			odiv.html(`
					<div class="m-df-cont">
						<h4>${item.name}</h4>
						<ol class="m-df-conts">
							<li>${item.songlist[0].track_name}-<span>${item.songlist[0].singer_name}</span></li>
							<li>${item.songlist[1].track_name}-<span>${item.songlist[1].singer_name}</span></li>
							<li>${item.songlist[2].track_name}-<span>${item.songlist[2].singer_name}</span></li>
						</ol>	
					</div>
					<div class="m-df-img">
						<img src="${item.pic}" alt="">
						<span class="u-dfimg-count">${item.listen_num}</span>
					</div>
			`)
			odiv.attr('ids',item.id)
				.attr('img',item.pic)
				.attr('title',item.name);
			odiv.appendTo($('.rank-dianfensum'));
		})
		var datalisttwo=data.data[1].list;
		// console.log(datalisttwo);
		$.each(datalisttwo,function(index,item){
			var odivs=$('<div class="m-local-item">');
			odivs.html(`
				<img src="${item.pic}" alt="">
				<p class="u-local-text">${item.name}</p>
				<span class="u-local-count">▶${item.listen_num}</span>
			`)
			odivs.appendTo($('.m-local-mrs'));
		})
	}
})
$('.rank-return').on('click',function(){
	$('.index').css({
		'transition': '.4s',
		'transform': 'translateX(0)'
	})
	//列表页完全出去到屏幕中
	$('.gl-list').css({
		'transition': '.4s',
		'transform': 'translateX(100%)'
	});
	//播放器 下去
	$('.gl-tab').css({
		'transition': '.4s',
		'transform': `translateY(0)`
	})
	$('.gl-rank').css({
		'transition': '.4s',
		'transform': 'translateX(100%)'
	})
	$('.gl-rank').hide(400);
})
// 排名集合点进去的时候
$('.rank-dianfensum').on('click','.m-dfcont-item',function(){
	console.log(111)
	$('.gl-rank').css({
		'transition': '.4s',
		'transform': 'translateX(-3.3rem)'
	})
	//列表页完全覆盖到屏幕中
	$('.gl-lists').css({
		'transition': '.4s',
		'transform': 'translateX(0)'
	})
	//背景图
	$('.list-headers').css({
		'backgroundImage': 'url('+$(this).attr('img')+')'
	})
	$('.gl-lists .menu-titles').html($(this).attr('title')).css('opacity',0);
	$.ajax({
		url:'http://api.cimns.com:8081/QQMusic/rank/detail',
		dataType: 'json',
		data: {
			topid: $(this).attr('ids')
		},
		success: function(res){
			// console.log(res);
			//为下一次数据做准备
			$('.music-list').empty();
			//列表
			var arr = res.songlist;
			$('.play-counts').html(arr.length)
			console.log(arr)
			$.each(arr, function(i,o){
				var li = $('<li>');
				li.attr('mid', o.data.songmid)
					.attr('singermid', o.data.singer[0].mid)
					.attr('songname', o.data.songname)
					.attr('singername', o.data.singer[0].name);
				li.append($('<span>').html(i+1))
					.append($('<div class="mu-text">')
							.append($('<p class="mu-title"></p>').html(o.data.songname))
							.append($('<p class="mu-cont">')
									.append($('<i class="font icon-Dj">&#xe61c;</i>'))
									.append($(ishq(o)))
									.append($('<span>').html(o.data.singer[0].name+'·'+o.data.albumname))
								)
						)
					.append($('<i class="font icon-Video">&#xe6bf;</i>'))
					.append($('<i class="font icon-more">&#xe604;</i>'));
				if(!o.vid) li.find('.icon-Video').hide();
				if(!o.isonly) li.find('.icon-Dj').hide();
				$('.music-list').append(li);
			})
		}
	})
})
function ishq(o){
	if(o.data.sizeflac!=0) return '<i class="font icon-Sq">&#xe60c;</i>';
	else if(o.data.size320!=0) return '<i class="font icon-Hq">&#xe8ab;</i>';
}
$('.back-btns').on('click', function(){
	//让当前首页向左移动三分之一
	// $('.index').css({
	// 	'transition': '.4s',
	// 	'transform': 'translateX(0)'
	// })
	//列表页完全出去到屏幕中
	$('.gl-lists').css({
		'transition': '.4s',
		'transform': 'translateX(100%)'
	});
	$('.gl-rank').css({
		'transition': '.4s',
		'transform': 'translateX(0)'
	})
	$('.music-list').empty('slow');
})

// $('.music-lists').on('click','li',function(){
// 	fnplays($(this));
// 	playIndex=$(this).index();
// })
// 播放器相关的各种操作
// function fnplays(_this){
// 	//清空歌词 重置播放器
// 	$('.lrc-inner').empty();
// 	audio.currentTime = 0;
// 	$('.play-line-old').css({width: 0});
// 	$('.btn-pause').hide();
// 	$('.btn-play').show();
// 	$('.lrc-inner').removeAttr('style');
// 	var _this = _this;
// 	$('.play-box').show();
// 	//进入的动画
// 	setTimeout(function(){
// 		$('.play-box').css({
// 			'transition': showTime + 's',
// 			'transform': 'translateY(0)'
// 		})
// 	},10)
// 	$.ajax({
// 		url: url + 'song/detail',
// 		dataType: 'json',
// 		type: 'get',
// 		data: {
// 			mid: _this.attr('mid')
// 		},
// 		success: function(res){
// 			var json = res;
// 			//sip 服务器   purl 播放地址   vkey 密钥  lrc 歌词
// 			console.log(json);
// 			//处理音乐
// 			audio.src = json.sip[1] + json.purl;
// 			if(!navigator.userAgent.match(/iPhone/i)){
// 				audio.play();
// 				//处理按钮
// 				$('.btn-pause').show();
// 				$('.btn-play').hide();
// 			}
// 			//歌曲的图片
// 			var _src = 'http:' + getPic({page: 'singer', type: 300, mid: _this.attr('singermid')});
// 			$('.mini-play img, .play-singer-pic img').attr('src', _src);
// 			$('.play-bg').css({'background-image': 'url('+_src+')'})
// 			//处理歌曲名称和歌手名称
// 			$('.mini-play p').html(_this.attr('songname') + ' - ' + _this.attr('singername'));
// 			$('.play-box .menu-title').html(_this.attr('songname'));
// 			$('.singer-name span').html(_this.attr('singername'));
// 			//图片转动
// 			$('.play-singer-pic img').on('load', function(){
// 				$(this).addClass('imgplay')
// 			})
// 			//歌曲还是纯音乐
// 			if(json.lyric === ''){
// 				$('.lrc-inner').append($('<li>').html('纯音乐，请欣赏。'))
// 			}
// 			else{
// 				//处理歌词
// 				lrcarr = [];
// 				var lrcold = json.lyric.split('\n');
// 				// console.log(lrcold);
// 				$.each(lrcold, function(i,o){
// 					var arr = o.split(']');
// 					if(!isNaN(arr[0].substring(1).split(':')[0])){
// 						lrcarr.push([str2num(arr[0].substring(1)), arr[1]])
// 					}
// 				})
// 				//创建歌词的Li
// 				$.each(lrcarr, function(i,o){
// 					var oLi = $('<li>');
// 					oLi.html(o[1]);
// 					$('.lrc-inner').append(oLi);
// 				})
// 				// console.log(lrcarr);
// 			}
// 		}
// 	})
// }