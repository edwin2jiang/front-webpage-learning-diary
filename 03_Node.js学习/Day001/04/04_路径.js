/*
 * @Author: 夏2同学
 * @Date: 2020-07-31 21:15:42
 * @LastEditTime: 2020-07-31 21:19:23
 * @LastEditors: 夏2同学
 * @FilePath: \Node.js学习\01_Day001\04_路径.js
 * @Description: 
 * 
 *         - path 包 path.join 封装路径
 *          win / \ 都可以代表路径
 *          linux /
 *          mac /    
 */ 

let path = require('path');
let str = "123";
const finalPath = path.join('a','b.html',str);
console.log (finalPath);