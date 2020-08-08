/*
 * @Author: 夏2同学
 * @Date: 2020-08-07 13:01:24
 * @LastEditTime: 2020-08-07 13:19:29
 * @LastEditors: 夏2同学
 * @FilePath: \03_Node.js学习\Day005\framework\01.firstExpress.js
 * @Description: 
 */

//引入express框架
const express = require('express');
//启动服务器 
const app = express();
//监听get请求
app.get('/', (req, res) => {
    // res.send() 方法的有点非常多
    // 1.send方法内部会检测响应内容的类型
    // 2. send方法会自动设置http状态码
    // 3. send方法会帮我们自动设置响应的内容类型及编码

    res.send("hello express");
});

app.get('/list', (req, res) => {
    res.send({ name: 'tom', age: '18' });
})
//监听端口
app.listen(3000);
console.log("服務器启动了");