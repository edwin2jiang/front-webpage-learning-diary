/*
 * @Author: 夏2同学
 * @Date: 2020-08-07 20:58:23
 * @LastEditTime: 2020-08-07 21:10:01
 * @LastEditors: 夏2同学
 * @FilePath: \03_Node.js学习\Day005\framework\router\home.js
 * @Description: 
 */ 

const express = require('express');
const home = express.Router();

home.get('/index',(req,res)=>{
    res.send('欢迎来到博客主页页面');
})

module.exports = home;