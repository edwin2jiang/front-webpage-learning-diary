/*
 * @Author: 夏2同学
 * @Date: 2020-08-05 16:53:50
 * @LastEditTime: 2020-08-05 22:09:42
 * @LastEditors: 夏2同学
 * @FilePath: \03_Node.js学习\Day004\async\asyncFunctionReadFile.js
 * @Description: 
 */ 

const fs = require('fs');
const promisify = require('util').promisify;

const readFile = promisify(fs.readFile);

async function  run (){
    let a = await readFile('./document/1.txt','utf8');
    let b = await readFile('./document/2.txt','utf8');
    let c = await readFile('./document/3.txt','utf8');

    console.log (a);
    console.log (b);
    console.log (c);
}

run();


