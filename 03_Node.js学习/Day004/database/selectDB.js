/*
 * @Author: 夏2同学
 * @Date: 2020-08-06 16:26:49
 * @LastEditTime: 2020-08-06 22:45:17
 * @LastEditors: 夏2同学
 * @FilePath: \03_Node.js学习\Day004\database\selectDB.js
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

//返回结果为一个数组
User.find({'_id':'5c09f1e5aeb04b22f8460965'}).then(res=>{
    console.log ("查找的数据：");
    console.log (res);
}).catch(err=>{
    console.log (err);
})

//永远只有返回一个文档
// User.findOne({name:'李四'}).then(res=>{
//     console.log (res);
// })

// User.find({age:{$gt:20,$lt:40}}).then(res=>{
//     console.log (res);
// })

// User.find({hobbies:{$in:['足球']}}).then(res=>{
//     console.log (res);
// });

// //设置查询字段 根据年龄进行升序排序
// User.find().sort('age').select('-_id name age')
//     .then(res=>{
//         console.log (res);
//     });
    
//设置查询字段 根据年龄进行降序排序
// User.find().sort('-age').select('-_id name age')
//     .then(res=>{
//         console.log (res);
//     });

// User.find().skip(1).limit(2)
//     .then(res=>{
//         console.log (res);
//     })

//删除单条数据
// User.findOneAndDelete({name:'张三'})
//     .then(res=>{
//         console.log (res);
//     })

//删除多行数据
// User.deleteMany({})
//     .then(res=>{
//         console.log (res);
//     })