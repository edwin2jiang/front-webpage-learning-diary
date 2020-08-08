/*
 * @Author: 夏2同学
 * @Date: 2020-08-08 05:59:57
 * @LastEditTime: 2020-08-08 06:04:53
 * @LastEditors: 夏2同学
 * @FilePath: \03_Node.js学习\Day006\framework\01_get.js
 * @Description: 
 */
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.get('/data', (req, res) => {
	res.send(req.query);
})

app.listen(3000);
console.log("服务器启动了");
