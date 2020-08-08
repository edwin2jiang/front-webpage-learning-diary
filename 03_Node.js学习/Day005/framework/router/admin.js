/*
 * @Author: 夏2同学
 * @Date: 2020-08-07 20:58:38
 * @LastEditTime: 2020-08-07 21:06:49
 * @LastEditors: 夏2同学
 * @FilePath: \03_Node.js学习\Day005\framework\router\admin.js
 * @Description: 
 */ 

const express = require('express');
const admin = express.Router();

admin.get('/index',(req,res)=>{
    res.send('欢迎来到后台管理页面');
})

module.exports = admin;