var gulp=require("gulp");
var uglify=require("gulp-uglify");
var concat=require("gulp-concat");
// var sass=require("gulp-sass");
var minify=require("gulp-minify-css");
var rev=require("gulp-rev");
var sever=require("gulp-webserver");
//压缩js
gulp.task("commit",function(){
    gulp.src("./js/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("./dist"));
})
//合并文件
gulp.task("concats",function(){
    gulp.src("./js/*.js")
    .pipe(concat("concat.js"))
    .pipe(uglify())
    .pipe(gulp.dest("./dist"))
})
//压缩css
gulp.task('css',function(){
    gulp.src("./css/*.css")
        .pipe(concat("concat.css"))
        .pipe(minify())
        .pipe(gulp.dest("./dist/css"))
})
//加密文件
gulp.task("jia",function(){
    gulp.src('./index.html')
        .pipe(rev())
        .pipe(gulp.dest("js"))
        .pipe(rev.manifest())
})
gulp.task('server',function(){
    gulp.src("./")
    .pipe(sever({
        livereload:true,
        port:8090
    }));
})
gulp.task('watch',function(){
    gulp.watch("./index.html",["commit","concats","css","jia"])
})
gulp.task("default",["server","watch"]);