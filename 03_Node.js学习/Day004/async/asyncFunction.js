/*
 * @Author: 夏2同学
 * @Date: 2020-08-05 16:29:45
 * @LastEditTime: 2020-08-05 16:33:14
 * @LastEditors: 夏2同学
 * @FilePath: \03_Node.js学习\Day004\async\asyncFunction.js
 * @Description: 
 *           - 异步函数封装了 promise的一些特性，让它更加好用
 */ 

async function fn (){
    throw '发生了错误';
    return 123;
}

fn().then((res)=>{
    console.log (res);
}).catch((err)=>{
    console.log (err);
})