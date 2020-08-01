/*
 * @Author: 夏2同学
 * @Date: 2020-08-01 08:48:35
 * @LastEditTime: 2020-08-01 09:04:46
 * @LastEditors: 夏2同学
 * @FilePath: \03_Node.js学习\Day002\gulp_demo\gulpfile.js
 * @Description: 
 */ 
const gulp = require('gulp');
gulp.task('first',()=>{
    console.log ("我们人生中第一次gulp任务");
    gulp.src('./src/css/ex05.css')
        .pipe(gulp.dest('dist/css'));
})