var { gulp,src,dest,watch,series } = require('gulp');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const px2rem = require('gulp-px2rem');

var browserSync = require('browser-sync').create();

var option = {
  rootValue: 62,//根字体大小
  unitPrecision: 5, //小数点后几位
  propertyBlackList: [],//不需要转换的属性
  propertyWhiteList: [],//需要转换的属性
  replace: true, //是否替换
  mediaQuery: false, //媒体查询是否转为rem
  minPx: 6 //小于多少不转换
}

function sassout(){
	return src('./sass/*.scss')
		.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
		.pipe(dest('./out'));
}
function w(){
	watch('./sass/*.scss', series(sassout, pxtorem));
	watch("*.html").on("change", browserSync.reload);
	watch("./style/*.css").on("change", browserSync.reload);
  watch('./js/*.js').on('change',browserSync.reload);
	browserReload();
}
//px转rem
function pxtorem(){
	return src('./out/*.css')
		.pipe(px2rem(option))
		.pipe(dest('./style'));
}

function browserReload() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
}

//series 	任务队列  一个执行完成再执行下一个 （如果其中的某个发生了错误，后面就中止了）
//parallel  一起执行  

exports.w = w;