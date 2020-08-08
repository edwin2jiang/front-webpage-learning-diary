/*
 * @Author: 夏2同学
 * @Date: 2020-08-06 17:48:15
 * @LastEditTime: 2020-08-06 17:56:15
 * @LastEditors: 夏2同学
 * @FilePath: \03_Node.js学习\Day004\database\updateDB.js
 * @Description: 
 */ 

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/playgroud',
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("数据库连接成功");
    })
    .catch((err) => {
        console.log(err, "数据库连接失败");
    })

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email:String,
    hobbies:[String],
    password:String
});

const User = mongoose.model('user',userSchema);

// User.updateOne({name:'张三'},{name:"法外狂徒"})
//     .then(res=>{
//         console.log (res);
//     })

User.updateMany({},{age:18})
    .then(res=>{
        console.log (res);
    })