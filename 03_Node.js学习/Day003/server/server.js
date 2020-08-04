//获取http模块
const http = require('http');
// 获取url模块
const url = require('url');

//创建服务器
const app = http.createServer();
//当客户端有请求时
app.on('request', (req,res)=>{
    // console.log ("请求方法：" + req.method);
    // console.log (req.url);

    // 返回头部信息 状态码 203 文本格式：html 文本编码 utf8
    res.writeHead(200,{
        'content-type':'text/html;charset="utf-8"'
    })

    // 1. 要解析的url地址
    // 2. 将要查询参数解析成对象参数
    // console.log(url.parse(req.url,true));

    let {pathname,query} = url.parse(req.url,true);
    console.log (pathname,query);

    if(pathname === "/" || pathname === "/index"){
        res.end("<h2> welcom to home page </h2> ");
    }else if (pathname === "/list" ){
        res.end("welcome to list page");
    }else{
        res.end("not found");
    }

    res.end('<h2>hello world</h2>');
})
//监听接口
app.listen(3000);
console.log ("服务器启动成功！");

