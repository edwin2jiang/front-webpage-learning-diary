/*
 * @Author: 夏2同学
 * @Date: 2020-08-07 18:36:14
 * @LastEditTime: 2020-08-07 18:51:28
 * @LastEditors: 夏2同学
 * @FilePath: \03_Node.js学习\Day005\framework\05_dealError.js
 * @Description: 
 */ 
const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    throw new Error('发生了未知错误');
    res.send('程序运行正常');
})

//错误处理中间件只能捕获同步错误处理中间件
//加上err就是错误处理中间件
app.use((err,req,res,next)=>{
    res.status(500).send(err.message);
})

app.listen(3000);
console.log ("服务器启动了");