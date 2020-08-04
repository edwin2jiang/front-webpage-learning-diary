/*
 * @Author: 夏2同学
 * @Date: 2020-08-01 08:48:35
 * @LastEditTime: 2020-08-02 13:53:52
 * @LastEditors: 夏2同学
 * @FilePath: \03_Node.js学习\Day002\gulp_demo\gulpfile.js
 * @Description: 
 */ 
const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const fileinclude = require('gulp-file-include');
const less = require('gulp-less');
const csso = require('gulp-csso');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');

gulp.task('first',()=>{
    console.log ("我们人生中第一次gulp任务");
    gulp.src('./src/css/ex05.css')
        .pipe(gulp.dest('dist/css'));
})


//html任务
// 1. html代码进行压缩
// 2. 抽取html代码的公共代码

// gulp.task('htmlMin', async()=>{
//     await gulp.src('./src/*.html')
//     .pipe(htmlmin({ collapseWhitespace: true }))
//     .pipe(gulp.dest('dist'));
// });

gulp.task('htmlTask', async()=>{
    console.log ("代码运行成功");
    await gulp.src('./src/htmlPage/*.html')
            .pipe(fileinclude())
            .pipe(htmlmin({ collapseWhitespace: true }))
            .pipe(gulp.dest('dist/html'));
});


//将css代码压缩 ， 将less代码转化

gulp.task('cssTask',async()=>{
    await gulp.src(['./src/css/a.less','./src/css/ex05.css'])
            .pipe(less())
            .pipe(csso())
            .pipe(gulp.dest('dist/css'));
})


// 处理js代码 
//  1. 转化成es5 
//  2. 压缩

gulp.task('jsTask',async()=>{
    await gulp.src(['./src/js/*'])
            .pipe(babel({
                presets: ['@babel/env']
            }))
            .pipe(uglify())
            .pipe(gulp.dest('dist/js'));
})

// 复制文件夹
gulp.task('copy',async() => {
    await gulp.src('./src/images/*')
              .pipe(gulp.dest('dist/images'));
})


// 通用操作 构建任务
gulp.task('default',gulp.series('htmlTask','cssTask','jsTask','copy'))