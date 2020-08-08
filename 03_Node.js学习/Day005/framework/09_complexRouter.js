/*
 * @Author: 夏2同学
 * @Date: 2020-08-07 21:01:39
 * @LastEditTime: 2020-08-07 21:14:53
 * @LastEditors: 夏2同学
 * @FilePath: \03_Node.js学习\Day005\framework\09_complexRouter.js
 * @Description: 
 */ 

const express = require('express');
const app = express();

const home = require('./router/home');
const admin = require('./router/admin'); 


app.use('/home',home);
app.use('/admin',admin);


app.listen(3000);
console.log ("服务器启动成功");