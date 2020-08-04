//获取http模块
const http = require('http');
// 获取url模块
const url = require('url');
const querystring = require('querystring');

//创建服务器
const app = http.createServer();
//当客户端有请求时
app.on('request', (req,res)=>{
    let postParams = '';

    req.on('data',params =>{
        postParams += params;
    })

    req.on('end',()=>{
        // querystring 将query字符串转化成字符串
        console.log (querystring.parse(postParams) );
    })

    res.end("ok");
})
//监听接口
app.listen(3000);
console.log ("post服务器启动成功！");

