/*
 * @Author: 夏2同学
 * @Date: 2020-08-06 19:38:22
 * @LastEditTime: 2020-08-06 20:01:39
 * @LastEditors: 夏2同学
 * @FilePath: \03_Node.js学习\Day004\database\postAndUser.js
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
});

const postSchema = new mongoose.Schema({
    title:{
        type:String
    },
    name:{
        type:String
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    }
})

const User = mongoose.model('user',userSchema);
const Post = mongoose.model('Post',postSchema);

Post.create({name:"tom",author:'5c09f1e5aeb04b22f8460965'})
    .then(res=>{
        console.log (res);
    })

// Post.find({author:'5c09f1e5aeb04b22f8460965'})
//     //关联字段
//     .populate('author')
//     .then(res=>{
//         console.log (res);
//     })
