/*
 * @Author: 夏2同学
 * @Date: 2020-08-05 16:41:20
 * @LastEditTime: 2020-08-05 16:46:40
 * @LastEditors: 夏2同学
 * @FilePath: \03_Node.js学习\Day004\async\asyncFn.js
 * @Description: 
 */ 

async function f1(){
    return 'f1';
}
async function f2(){
    return 'f2';
}

async function f3(){
    return 'f3';
}

async function run(){
    let a =  await f1();
    let b =  await f2();
    let c =  await f3();

    console.log (a);
    console.log (b);
    console.log (c);
}

run();