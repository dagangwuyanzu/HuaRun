const gulp = require('gulp');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const sass = require('gulp-sass');

// 创建gulp任务
// gulp的构建是基于任务的，每一个操作都需要一个任务来执行
// 格式：gulp.task(name,taskFunction)
// gulp.task('default', function() {
//     // 在命令行运行gulp命令会执行这里的代码
//     console.log('hello gulp');
// });

// 任务1：压缩js代码
// 依赖：gulp-uglify
gulp.task('compress', function () {
    // 利用gulp.src()匹配要压缩的文件，返回一个**文件流**
    return gulp.src(['src/lib/*.js'])

        // 压缩
        .pipe(uglify())

        // 改名
        .pipe(rename({
            suffix: ".min",
        }))

        .pipe(gulp.dest('./dist'))
});

// 任务2：编译ES6代码为ES5代码
// 依赖：gulp-babel, @babel/core, @babel/preset-env
gulp.task('es625', () => {
    return gulp.src('src/js/*.js')
        // 合并
        .pipe(concat('main.js'))
        // Es6->ES5
        .pipe(babel({
            presets: ['@babel/preset-env']
        }))
        .pipe(gulp.dest('./dist/js'))

        // 压缩
        .pipe(uglify())

        // 改名
        .pipe(rename({
            suffix: ".min",
        }))

        .pipe(gulp.dest('./dist/js'))
})


const compileSass = function () {
    return gulp.src('src/sass/*.scss')
        .pipe(sass({
            outputStyle: 'compact', //nested(默认）,expanded：展开,compact：单行,compressed：压缩
        }).on('error', sass.logError))
        .pipe(gulp.dest('./src/css'))
}
gulp.task('compileSass', compileSass)

// 监听sass，并实现自动编译
gulp.task('autoSass', () => {
    console.log(65465456456);
    gulp.watch('./src/**/*.scss', compileSass)
    // gulp.watch('./src/**/*.js',compileSass)
})