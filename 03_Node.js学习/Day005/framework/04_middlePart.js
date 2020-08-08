/*
 * @Author: 夏2同学
 * @Date: 2020-08-07 18:06:28
 * @LastEditTime: 2020-08-07 18:49:18
 * @LastEditors: 夏2同学
 * @FilePath: \03_Node.js学习\Day005\framework\04_middlePart.js
 * @Description: 
 */ 

const express = require('express');
const app = express();

app.get('/admin',(req,res)=>{
    res.send('admin数据');
})

app.use((req,res,next) =>{
    res.status(404);
    res.send('404资源未找到');
})

app.listen(3000);
console.log ("服务器启动了");