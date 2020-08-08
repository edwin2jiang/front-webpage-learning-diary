/*
 * @Author: 夏2同学
 * @Date: 2020-08-08 06:24:06
 * @LastEditTime: 2020-08-08 06:25:41
 * @LastEditors: 夏2同学
 * @FilePath: \03_Node.js学习\Day006\framework\03_routerParams.js
 * @Description: 
 */ 
const express  = require('express');
const app = express();

//路由参数
app.get('/data/:id/:name',(req,res)=>{
    res.send(req.params);
})

app.post('/post',(req,res)=>{
    res.send(req.body);
})

app.listen(3000);
console.log ("服务器启动了");