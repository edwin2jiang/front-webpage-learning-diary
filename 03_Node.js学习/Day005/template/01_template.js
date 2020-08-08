/*
 * @Author: 夏2同学
 * @Date: 2020-08-07 09:01:57
 * @LastEditTime: 2020-08-07 09:07:33
 * @LastEditors: 夏2同学
 * @FilePath: \03_Node.js学习\Day005\template\01_template.js
 * @Description: 
 */ 

const template = require('art-template');
const path = require('path');


let html = template(path.join(__dirname,'01_index.art'),{
    data:{
        name:"tom",
        age:'18'
    }
})

console.log (html);