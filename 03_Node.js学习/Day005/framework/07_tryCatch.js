/*
 * @Author: 夏2同学
 * @Date: 2020-08-07 20:26:04
 * @LastEditTime: 2020-08-07 20:30:55
 * @LastEditors: 夏2同学
 * @FilePath: \03_Node.js学习\Day005\framework\07_tryCatch.js
 * @Description: 
 */
const express = require('express');
const app = express();
const fs = require('fs');

app.get('/data',async (req, res, next) => {
    try {
        await fs.readFile('demo.html')
    }catch(ex){
        next(ex);
    }   

})

//错误处理中间件只能捕获同步错误处理中间件
//加上err就是错误处理中间件
app.use((err, req, res, next) => {
    res.status(500).send(err.message);
})

app.listen(3000);
console.log("服务器启动了");