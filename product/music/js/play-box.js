var url="http://api.cimns.com:8081/QQMusic/";
var audio=document.querySelector('audio');
var showTime=0.4;
// 清空数组中的歌词
var lrcarr = [];
//当前播放的是第几首
var playIndex = 0;
//模式   0 随机  1 顺序  2 单曲循环
var patternNum = 0;
$('.play-box').css('transform','translateY(100%)').css('display','none');
// 点击list时play-box出现变并且歌曲详细出现
$('.music-list').on('click','li',function(){
	fnplay($(this));
	playIndex = $(this).index();
	$('.menu').css({
		'transform':'translateY(0)'
	})
})

// 排行巅峰榜里的歌曲
// $('.music-lists').on('click','li',function(){
// 	fnplay($(this));
// 	playIndex =$(this).index();
// })
// 播放器相关的各种操作
function fnplay(_this){
	//清空歌词 重置播放器
	$('.lrc-inner').empty();
	// 音频重置
	audio.currentTime = 0;
	// 进度条重置
	$('.play-line-old').css({width: 0});
	// 暂停隐藏
	$('.btn-pause').hide();
	$('.btn-play').show();

	$('.lrc-inner').removeAttr('style');
	var _this = _this;
	$('.play-box').show();
	//进入的动画
	setTimeout(function(){
		$('.play-box').css({
			'transition': showTime + 's',
			'transform': 'translateY(0)'
		})
	},10)
	$.ajax({
		url: url + 'song/detail',
		dataType: 'json',
		type: 'get',
		data: {
			mid: _this.attr('mid')
		},
		success: function(res){
			
			var json = res;
			//sip 服务器   purl 播放地址   vkey 密钥  lrc 歌词
			// console.log(json);
			//处理音乐
			audio.src = json.sip[1] + json.purl;
			if(!navigator.userAgent.match(/iPhone/i)){
				audio.play();
				//处理按钮
				$('.btn-pause').show();
				$('.btn-play').hide();
			}
			//歌曲的图片
			var _src = 'http:' + getPic({page: 'singer', type: 300, mid: _this.attr('singermid')});
			$('.mini-play img, .play-singer-pic img').attr('src', _src);
			$('.play-bg').css({'background-image': 'url('+_src+')'})
			//处理歌曲名称和歌手名称
			$('.mini-play p').html(_this.attr('songname') + ' - ' + _this.attr('singername'));
			$('.play-box .menu-title').html(_this.attr('songname'));
			$('.singer-name span').html(_this.attr('singername'));
			//图片转动
			$('.play-singer-pic img').on('load', function(){
				$(this).addClass('imgplay')
			})
			//歌曲还是纯音乐
			if(json.lyric === ''){
				$('.lrc-inner').append($('<li>').html('纯音乐，请欣赏。'))
			}
			else{
				//处理歌词
				lrcarr = [];
				var lrcold = json.lyric.split('\n');
				// console.log(lrcold);
				$.each(lrcold, function(i,o){
					var arr = o.split(']');
					if(!isNaN(arr[0].substring(1).split(':')[0])){
						lrcarr.push([str2num(arr[0].substring(1)), arr[1]])
					}
				})
				//创建歌词的Li
				$.each(lrcarr, function(i,o){
					var oLi = $('<li>');
					oLi.html(o[1]);
					$('.lrc-inner').append(oLi);
				})
				// console.log(lrcarr);
			}
		}
	})
}
$('.mini-play img').on('click',function(){
	if(audio.src=='') return;
	$('.play-box').show();
	setTimeout(function(){
		$('.play-box').css({
			'transition': '.4s',
			'transform': 'translateY(0)'
		})
	},100)
})
$('.down-btn').on('click',function(){
	$('.play-box').css({
		'transition': '.4s',
		'transform': 'translateY(100%)'
	})
	setTimeout(function(){
		$('.play-box').hide()
	},400)
})
$('.play-mask-top').hide();
$('.play-dot').on('click','i',function(){
	$(this).addClass('active').siblings().removeClass('active');
	var nums=-$(this).index() * 10;
	if($(this).index()==0){
		$('.play-mask-top').hide();
	}else{
		$('.play-mask-top').show();
	}
	$('.play-cont-inner').css({
		'transition': '.4s',
		'transform':'translateX('+nums+'rem)'
	})
})

//暂停按钮
$('.btn-pause').on('click', function(){
	//图片暂停转动
	$('.play-singer-pic img').addClass('imgplay-pause');
	//音乐暂停
	audio.pause();
	//按钮切换
	$('.btn-pause').hide();
	$('.btn-play').show();
})
//播放按钮
$('.btn-play').on('click', function(){
	//图片暂停转动
	$('.play-singer-pic img').removeClass('imgplay-pause');
	//音乐暂停
	audio.play();
	//按钮切换
	$('.btn-pause').show();
	$('.btn-play').hide();
})
//addEventListener 事件监听（绑定）  timeupdate 当时间发生变化的时候
audio.addEventListener('timeupdate', function(){
	var c = audio.currentTime;
	var d = audio.duration;
	//圆点所占比例
	// var dotScale = $('.play-line-old span').width() / $('.play-line').width();
	$('.currentTime').html(changeTime(c));
	$('.duratime').html(changeTime(d));
	//进度条
	$('.play-line-old').css({
		width: c/d * 100 +'%'
	})
	if($('.lrc-inner li').length!=0){
		//歌词部分
		for(var i=0;i<lrcarr.length;i++){
			if(audio.currentTime>=lrcarr[i][0]){
				$('.lrc-inner li').eq(i).addClass('active').siblings('li').removeClass('active');

				$('.lrc-inner').css({
					'transform': 'translateY(-'+$('.lrc-inner li').eq(i).position().top+'px)',
					'transition': '.35s linear'
				})
			}
		}
	}
	// console.log(c,d)
	// if(c==d){
	// 	$('.btn-pause').hide();
	// 	$('.btn-play').show();
	// 	$('.play-singer-pic img').removeClass('imgplay');
	// }
}, false)
// 鼠标点击快进
$('.play-line-box').on('touchstart', function(e){
	audio.pause();
	//鼠标距离元素的位置
	var x = e.touches[0].clientX - $('.play-line-box').offset().left;
	var scale = x / $('.play-line-box').width();
	//点站的比例
	//进度条
	$('.play-line-old').css({
		width: scale * 100 + '%'
	})
	//当前时间
	audio.currentTime = scale * audio.duration;
})
// 鼠标拖动
$('.play-line-box').on('touchmove', function(e){
	//鼠标距离元素的位置
	var x = e.touches[0].clientX - $('.play-line-box').offset().left;
	var scale = x / $('.play-line-box').width();
	//点站的比例
	//进度条
	$('.play-line-old').css({
		width: scale * 100 + '%'
	})
	//当前时间
	audio.currentTime = scale * audio.duration;
})
// 鼠标离开
$('.play-line-box').on('touchend', function(e){
	audio.play();
	$('.btn-pause').show();
	$('.btn-play').hide();
})
// 播放方式
var num=0;
$('.play-btn-schema').on('click',function(){
	num++;
	if(num>2){
		num=0;
	}
	$(this).children().eq(num).show().siblings().hide();
	patternNum=num;
})
//下一首
//模式  0 随机  1 顺序  2 单曲
$('.btn-next').click(function(){
	audio.pause();
	// 随机
	if(patternNum == 0){
		playIndex = parseInt(Math.random() * $('.music-list li').length);
		//播放函数
		fnplay($('.music-list li').eq(playIndex));
	}
	// 1顺序
	if(patternNum == 1){
		playIndex++;
		console.log(playIndex);
		fnplay($('.music-list li').eq(playIndex));
	}
	// 2单曲
	if(patternNum == 2){
		fnplay($('.music-list li').eq(playIndex));
	}
})
audio.addEventListener('ended', function(){
	$('.btn-next').trigger('click');
})
//上一首
//模式  0 随机  1 顺序  2 单曲
$('.btn-prev').click(function(){
	audio.pause();
	// 随机
	if(patternNum == 0){
		playIndex = parseInt(Math.random() * $('.music-list li').length);
		//播放函数
		fnplay($('.music-list li').eq(playIndex));
	}
	// 1顺序
	if(patternNum == 1){
		playIndex--;
		if(playIndex<0){
			fnplay($('.music-list li').eq(-1));
		}
		fnplay($('.music-list li').eq(playIndex));
	}
	// 2单曲
	if(patternNum == 2){
		fnplay($('.music-list li').eq(playIndex));
	}
})






//把秒转为分钟 00:00
function changeTime(t){
	isNaN(t)? t=0:t;
	var m = parseInt(t / 60);
	var s = parseInt(t % 60);
	return db(m)+':'+db(s);
}
//补零
function db(n){return n<10?'0'+n:n;}
//字符串转数组
function str2num(str){
	// var str = '01:27.83'; //['01','27.83']
	var arr = str.split(':');
	return arr[0]*60 + Number(arr[1]);
}
//获取歌手和歌曲图片-返回字符串
function getPic(t){
  t = t || {};
  let e = "//y.gtimg.cn/mediastyle/macmusic_v4/extra/default_cover.png?max_age=31536000",
      o = t.page,
      n = t.type,
      i = t.mid;
  return 90 >= n ? n = 90 : n > 90 && 180 >= n ? n = 150 : n > 180 && 300 >= n ? n = 300 : n > 300 && 500 >= n ? n = 500 : n > 500 && (n = 800),
      window.devicePixelRatio && parseInt(window.devicePixelRatio) > 1 && ((300 == n || 500 == n) && (n = 800),
          150 == n && (n = 300),
          (68 == n || 90 == n) && (n = 150)),
      "string" == typeof i && i.length >= 14 ? (o = "album" == o ? "T002" : "singer" == o ? "T001" : o,
          e = "//y.gtimg.cn/music/photo_new/" + o + "R" + (n || 68) + "x" + (n || 68) + "M000" + i + ".jpg?max_age=2592000") : i > 0 && (e = "//y.gtimg.cn/music/photo/" + o + "_" + (n || 68) + "/" + i % 100 + "/" + (n || 68) + "_" + o + "pic_" + i + "_0.jpg?max_age=2592000"),
      e
}