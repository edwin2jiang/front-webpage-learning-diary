/*
 * @Author: 夏2同学
 * @Date: 2020-07-31 20:48:16
 * @LastEditTime: 2020-07-31 20:58:16
 * @LastEditors: 夏2同学
 * @FilePath: \Node.js学习\01_Day001\03_readFile.js
 * @Description: 
 *      - fs文件系统 先得导入 fs = require('fs');
 *      fs.readFile('文件名'[,'編碼'],callback)
 */ 

let fs = require('fs');

fs.readFile('./02.a.js','utf8',(err,doc)=>{
    console.log (err);
    console.log (doc);
});


