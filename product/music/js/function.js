//把秒转为分钟 00:00
function changeTime(t){
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