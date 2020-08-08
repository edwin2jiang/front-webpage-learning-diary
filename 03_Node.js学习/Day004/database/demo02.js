/*
 * @Author: 夏2同学
 * @Date: 2020-08-05 20:16:15
 * @LastEditTime: 2020-08-05 20:20:43
 * @LastEditors: 夏2同学
 * @FilePath: \03_Node.js学习\Day004\database\demo02.js
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

const courseSchema = new mongoose.Schema({
    name:String,
    author:String,
    isPublish:Boolean
});

const Course =  mongoose.model('Course',courseSchema); //集合 Courses 
let course = new Course({
    name:"tom",
    author:"nike",
    isPublish:true
})

course.save();