/*
 * @Author: 夏2同学
 * @Date: 2020-07-31 21:10:55
 * @LastEditTime: 2020-07-31 21:13:37
 * @LastEditors: 夏2同学
 * @FilePath: \Node.js学习\01_Day001\03_writeFile.js
 * @Description: 
 */ 


let fs = require('fs');
let data = "<h3>测试</h3>";
fs.writeFile('./测试.html',data,err=>{
    if (err != null){
        console.log (err);
        return ;
    }
    console.log ("写入成功");
})