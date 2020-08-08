/*
 * @Author: 夏2同学
 * @Date: 2020-08-06 18:25:49
 * @LastEditTime: 2020-08-06 19:26:36
 * @LastEditors: 夏2同学
 * @FilePath: \03_Node.js学习\Day004\database\checkDB.js
 * @Description: 
 */ 

const mongoose = require('mongoose');
const { kMaxLength } = require('buffer');
mongoose.connect('mongodb://localhost/playgroud',
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("数据库连接成功");
    })
    .catch((err) => {
        console.log(err, "数据库连接失败");
    })

const postSchema = new mongoose.Schema({
    name:{
        //数据类型
        type:String,
        //是否必填
        required:[true,'name不能为空'],
        //字符串最小长度
        minlength:3,
        //字符串最大长度
        maxlength:5,
        //去除收尾空格
        trim:true,
    },
    age:{
        type:Number,
        //数值最小值
        min:10,
        //数值最大值
        max:100
    },
    title:{
        type:String,
        //枚举
        enum:['manager','customer'],
        //默认值
        default:'customer'
    },
    job:{
        type:String,
        //自定义验证器
        validate:{
            validator: v=>{
                return v&&v.length>=5
            },
            message:'job不能为空且不能少于5个字符'

        }
    }


});

const Post = mongoose.model('Post',postSchema);

Post.create({
        name:' aaa   ',
        age:'1001',
        job:'3'
    })
    .then(res=>{
        console.log (res);
    })
    .catch(err=>{
        let errors = err.errors;
        console.log (errors);

        for (let atrr in errors){
            console.log (errors[atrr]['message']);
        }
    })
