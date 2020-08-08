/*
 * @Author: 夏2同学
 * @Date: 2020-08-08 07:26:09
 * @LastEditTime: 2020-08-08 07:37:24
 * @LastEditors: 夏2同学
 * @FilePath: \03_Node.js学习\Day006\framework\05_template.js
 * @Description: 
 */

const express = require('express');
const app = express();
const path = require('path');

// 当渲染后缀为art的模板时 使用express-art-template
app.engine('art', require('express-art-template'));
// 设置模板存放目录
app.set('views', path.join(__dirname, 'views'));
// 渲染模板时不写后缀 默认拼接art后缀
app.set('view engine', 'art');
app.get('/', (req, res) => {
    // 渲染模板
    res.render('index',{
        message:"欢迎来到主页"
    });
});

app.listen(3000);
console.log("服务器启动了");