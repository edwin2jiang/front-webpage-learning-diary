/*
 * @Author: 夏2同学
 * @Date: 2020-07-31 13:48:25
 * @LastEditTime: 2020-07-31 20:47:54
 * @LastEditors: 夏2同学
 * @FilePath: \Node.js学习\01_Day001\02.a.js
 * @Description: 
 */ 


 let a = 1;
 let b = 2;

 exports.a = a;
 module.exports.b = b;

 console.log (exports);
 console.log (" ----------------");

 module.exports = {
     a:123
 }

exports = {
    b:245
}
