var gulp=require("gulp");
var sass=require("gulp-sass");
var connect=require("gulp-connect");
var babel=require("gulp-babel");
gulp.task("copy-html",function(){
	gulp.src("html/**").pipe(gulp.dest("dist"))
	.pipe(connect.reload());//易忘点
});
gulp.task("copy-img",function(){
	gulp.src("img/**")
	.pipe(gulp.dest("dist/img"));
});
gulp.task("copy-js",function(){
	gulp.src("js/**")
	.pipe(babel({"presets":["es2015"]}))
	.pipe(gulp.dest("dist/js"))
	.pipe(connect.reload());
});
gulp.task("sass",function(){
	gulp.src("css/**")
	.pipe(sass())
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
});
gulp.task("server",function(){
	connect.server({
		root:'dist',
		livereload:true
		});
})
gulp.task("watch",function(){
	gulp.watch("html/**",["copy-html"]);
	gulp.watch("img/**",["copy-img"]);
	gulp.watch("css/**",["sass"]);
	gulp.watch("js/**",["copy-js"]);
	
})
gulp.task("default",["watch","server"]);