/*
 * @Author: 夏2同学
 * @Date: 2020-08-07 13:45:39
 * @LastEditTime: 2020-08-07 13:49:46
 * @LastEditors: 夏2同学
 * @FilePath: \03_Node.js学习\Day005\framework\03_app.use.js
 * @Description: 
 */ 
const express = require('express');
const app = express();

//use 可以匹配所有的url
app.use((req,res,next)=>{
    console.log ('走了use中间件');
    next();
})

//use 也可以传入一个参数，用作匹配url
app.use('/list',(req,res,next)=>{
    console.log ('走了use list中间件');
    next();
})

app.get('/list',(req,res,next) =>{
    res.send('use中间件');
    next();
})


app.listen(3000);
console.log ("服务器启动了");