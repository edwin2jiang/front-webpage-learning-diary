/*
 * @Author: 夏2同学
 * @Date: 2020-07-31 21:27:28
 * @LastEditTime: 2020-07-31 21:43:34
 * @LastEditors: 夏2同学
 * @FilePath: \Node.js学习\01_Day001\04\04_相对路径和绝对路径.js
 * @Description: 
 * 
 *      __dirname 当前模块的目录名（工作目录) 
 *      绝对路径更加安全
 */ 
console.log (__dirname);


let path = require('path');
let fs = require('fs');

fs.readFile(path.join(__dirname,'04_路径.js'),'utf8',(err,doc)=>{
    console.log (err);
    console.log (doc);
})