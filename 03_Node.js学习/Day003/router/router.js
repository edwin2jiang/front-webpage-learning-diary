//1.引入系统模块http
//2.创建网站服务器
//3.为网站服务器对象添加请求事件
//4.实现路由功能 I
//  4.1.获取客户端的请求方式
//  4.2.获取客户端的请求地址


const http = require('http');
const path = require('path');
const url = require('url');

const app = http.createServer();

app.on('request', (req, res) => {
    const resType = req.method;
    const pathname = url.parse(req.url).pathname;

    res.writeHead(200,{
        'content-type':'text/html;charset="utf8"'
    })

    if (resType === "GET") {
        if (pathname === '/' || pathname === '/index') {
            res.end("欢迎来到主页");
        } else if (pathname === '/list') {
            res.end("欢迎来到列表页");
        } else {
            res.end("没有您的页面");
        }
    }else if (resType === 'POST'){
        res.end("您想要post什么");
    }
})

app.listen(3000);
console.log ("服务器启动了！");