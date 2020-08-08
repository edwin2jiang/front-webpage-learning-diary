/*
 * @Author: 夏2同学
 * @Date: 2020-08-08 06:31:25
 * @LastEditTime: 2020-08-08 06:38:49
 * @LastEditors: 夏2同学
 * @FilePath: \03_Node.js学习\Day006\framework\04_static.js
 * @Description: 静态资源自动托管访问
 */ 
const express  = require('express');
const app = express();
const path = require('path');

//静态资源自动托管，前缀static
app.use('/static', express.static(path.join(__dirname,'public')));

//静态资源自动托管
// app.use(express.static(path.join(__dirname,'public')));

app.listen(3000);
console.log ("服务器启动了");