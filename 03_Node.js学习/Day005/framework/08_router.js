/*
 * @Author: 夏2同学
 * @Date: 2020-08-07 20:37:36
 * @LastEditTime: 2020-08-07 20:43:00
 * @LastEditors: 夏2同学
 * @FilePath: \03_Node.js学习\Day005\framework\08_router.js
 * @Description: 
 */ 

//获取express模块
const express = require('express');
//启动服务器
const app = express();
//创建路由
const home = express.Router();
//将一级路由与路径进行绑定
app.use('/home',home);
//创建二级路由
home.get('/index',(req,res,next)=>{
    res.send('欢迎来到主页');
})

app.listen(80);
console.log ("服务器启动成功！");