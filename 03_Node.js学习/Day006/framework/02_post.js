/*
 * @Author: 夏2同学
 * @Date: 2020-08-08 06:08:42
 * @LastEditTime: 2020-08-08 06:14:47
 * @LastEditors: 夏2同学
 * @FilePath: \03_Node.js学习\Day006\framework\02_post.js
 * @Description: 
 */ 
const express  = require('express');
const bodyParser = require('body-parser');
const app = express();

//拦截所有请求
//urlencoded 必传参数 extended , 当它为false时，使用系统模块queryString.
//当它为true时，使用第三方模块qs
app.use(bodyParser.urlencoded({extended:false}));

app.get('/data',(req,res)=>{
    res.send(req.query);
})

app.post('/post',(req,res)=>{
    res.send(req.body);
})

app.listen(3000);
console.log ("服务器启动了");