const fs = require('fs');


let p = new Promise((resolve,reject)=>{
    fs.readFile('./document/1.txt','utf8',(err,result) =>{
        if (err !== null) {
        reject(err);
    } else {
        resolve(result)
    }
    });
});

p.then((result) => {
    console.log(result);
})
.catch((err) => {
    console.log(err);
})