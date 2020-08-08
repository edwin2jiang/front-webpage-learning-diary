/*
 * @Author: 夏2同学
 * @Date: 2020-08-05 19:43:40
 * @LastEditTime: 2020-08-05 20:00:21
 * @LastEditors: 夏2同学
 * @FilePath: \03_Node.js学习\Day004\database\01.js
 * @Description: 
 */ 

 const mongoose = require('mongoose');
 mongoose.connect('mongodb://localhost/playgroud', 
                    { useNewUrlParser: true ,useUnifiedTopology: true})
         .then(()=>{
             console.log ("数据库连接成功");
         })
         .catch((err)=>{
             console.log (err,"数据库连接失败");
         })