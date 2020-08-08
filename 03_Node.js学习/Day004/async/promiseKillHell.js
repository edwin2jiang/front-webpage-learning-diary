/*
 * @Author: 夏2同学
 * @Date: 2020-08-05 16:13:02
 * @LastEditTime: 2020-08-05 16:21:44
 * @LastEditors: 夏2同学
 * @FilePath: \03_Node.js学习\Day004\async\promiseKillHell.js
 * @Description: 
 */ 


const fs = require('fs');

function p1(){
    return new Promise((resolve,reject)=>{
        fs.readFile('./document/1.txt','utf8',(err,result)=>{
            resolve(result);
        })
    })
}

function p2(){
    return new Promise((resolve,reject)=>{
        fs.readFile('./document/2.txt','utf8',(err,result)=>{
            resolve(result);
        })
    })
}

function p3(){
    return new Promise((resolve,reject)=>{
        fs.readFile('./document/3.txt','utf8',(err,result)=>{
            resolve(result);
        })
    })
}

p1().then((res)=>{
    console.log (res);
    return p2();
}).then((res)=>{
    console.log (res);
    return p3();
}).then((res)=>{
    console.log (res);
})