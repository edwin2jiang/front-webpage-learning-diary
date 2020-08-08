const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');
const mime = require('mime');

const app = http.createServer();

app.on('request', (req, res) => {
    // 获取用户的请求路径
    let pathname = url.parse(req.url).pathname;
    pathname = pathname === '/' ? '/default.html' : pathname;
    let realPath = path.join(__dirname, 'public' + pathname);

    console.log(mime.getType(realPath));
    let type = mime.getType(realPath);

    fs.readFile(realPath, (err, doc) => {
        if (err !== null) {
            res.writeHead(400, {
                'content-type': 'text/html;charset=utf8'
            })
            res.end('文件读取失败');
            return;
        }

        res.writeHead(200, {
            'content-type':  type + ';charset=utf8'
        })
        res.end(doc);

    })
    

});

app.listen(3000);
console.log('服务器启动成功')
