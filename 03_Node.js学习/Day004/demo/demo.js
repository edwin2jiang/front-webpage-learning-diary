/*
 * @Author: 夏2同学
 * @Date: 2020-08-06 22:45:48
 * @LastEditTime: 2020-08-06 23:23:04
 * @LastEditors: 夏2同学
 * @FilePath: \03_Node.js学习\Day004\demo\demo.js
 * @Description: 
 */
const http = require('http');
const path = require('path');
const url = require('url');
const mongoose = require('mongoose');

//启动服务器
const app = http.createServer();

//连接数据库
mongoose.connect('mongodb://localhost/playgroud', {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then(() => {
		console.log("数据库连接成功");
	})
	.catch((err) => {
		console.log(err, "数据库连接失败");
	})

//构造schema 
const userSchema = new mongoose.Schema({
	name: String,
	age: Number,
	email: String,
	hobbies: [String],
	password: String
});


const User = mongoose.model('user', userSchema);



app.on('request', (req, res) => {
	const resType = req.method;
	const pathname = url.parse(req.url).pathname;

	res.writeHead(200, {
		'content-type': 'application/json;charset="utf8"',
		"Access-Control-Allow-Origin": "*"
	})

	
	if (resType === "GET") {
		if (pathname === '/getData' || pathname === '/') {
			//返回结果为一个数组
			User.find({}).then(result => {
				console.log("查找的数据：");
				console.log(result);
				res.end(JSON.stringify(result));
				// res.end(result);
			}).catch(err => {
				console.log(err);
			})
		}
	} else if (resType === 'POST') {
		res.end("您想要post什么");
	}
})

app.listen(3000);
console.log("服务器启动了！");
