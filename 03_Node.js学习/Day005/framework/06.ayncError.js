/*
 * @Author: 夏2同学
 * @Date: 2020-08-07 19:12:07
 * @LastEditTime: 2020-08-07 19:14:12
 * @LastEditors: 夏2同学
 * @FilePath: \03_Node.js学习\Day005\framework\06.ayncError.js
 * @Description: 
 */ 
const express = require('express');
const app = express();
const fs = require('fs');

app.get('/data',(req,res,next)=>{
   fs.readFile('demo.html',(err,result)=>{
       if (err !== null){
            next(err);
       }
   })

})

//错误处理中间件只能捕获同步错误处理中间件
//加上err就是错误处理中间件
app.use((err,req,res,next)=>{
    res.status(500).send(err.message);
})

app.listen(3000);
console.log ("服务器启动了");