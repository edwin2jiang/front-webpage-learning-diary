// 回调地狱

const fs = require('fs');

fs.readFile('./document/1.txt', 'utf8', (err,doc) => {
    console.log(doc);
    fs.readFile('./document/2.txt', 'utf8', (err,doc) => {
        console.log(doc);
        fs.readFile('./document/3.txt', 'utf8', (err,doc) => {
            console.log(doc);
        })
    })
})