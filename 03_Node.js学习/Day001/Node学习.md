@time:2020年7月31日21:57:57

## 起步

1. 安装
   1. 略
2. 检验
   1. node -v
3. 写程序
   1. 基础的ECMAScript语法
4. 运行
   1. node 文件名  //执行程序
#### 小技巧

先按住shift ，在右键里面有个 快捷启动 powershell

在powershell中运行（实际也能在cmd 和 git 的控制台运行）

node 部分文件名+tab自动补齐

## Node.js模块化开发

#### 导出

 exports**.**version **=** version**;**

#### 导入

const a = require("文件路径");

// 文件路径的后缀名 .js 可省略

#### 导出的另一种方式

module.exports 

两者使用方法基本相同

但是实际导出的以 module.exports 为准

![image-20200731140123731](http://imgbed-xia-2.oss-cn-hangzhou.aliyuncs.com/img/image-20200731140123731.png)

```javascript

 let a = 1;
 let b = 2;

 exports.a = a;
 module.exports.b = b;

 module.exports = {
     a:123
 }            // 最后实际 exports = {a : 123}

exports = {
    b:456
}
```



## 系统模块fs

#### 文件系统

1. 导入
2. 使用

导入 let fs = require('fs');

#### readFile 的使用

 *fs.readFile('文件名'[,'編碼'],callback)*

```javascript
let fs = require('fs');

fs.readFile('./02.a.js','utf8',(err,doc)=>{
    console.log (err);
    console.log (doc);
});
```



## 系统模块path

导入 let path = require('path');

path.join的使用 自动拼接路径

```javascript
let path = require('path');
let str = "123";
const finalPath = path.join('a','b.html',str);
console.log (finalPath);
```

#### __dirname的使用

 *__dirname 当前模块的目录名（工作目录)* 

 绝对路径更加安全

## npm的使用

安装

npm install 模块名 

卸载

npm uninstall  package 模块名

npm uninstall 模块名