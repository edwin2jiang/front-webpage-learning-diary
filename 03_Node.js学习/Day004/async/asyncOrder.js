
console.log ("代码开始执行");

setTimeout(() => {
    console.log ("2s");
}, 2000);

setTimeout(() => {
    console.log ("0s");
}, 0);

console.log ("代码结束执行");