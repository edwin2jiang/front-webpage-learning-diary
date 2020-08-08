/*
 * @Author: 夏2同学
 * @Date: 2020-08-07 13:31:48
 * @LastEditTime: 2020-08-07 13:52:28
 * @LastEditors: 夏2同学
 * @FilePath: \03_Node.js学习\Day005\framework\02_secondExpress.js
 * @Description:
 */ 

const express = require('express');
const app = express();


app.get('/',(req,res,next) =>{
    req.name = 'tom'
    next();
})

app.get('/',(req,res,next)=>{
    console.log (req.name);
    res.send();
})

app.listen(3000);
console.log ("服务器启动了");




 