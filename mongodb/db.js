//1.安装
//2.导入安装模块
let mongoose = require('mongoose')
//创建一个数据库地址
let dbUrl = 'mongodb://localhost/disco'//disco数据库库名
//创建链接
mongoose
    .connect(dbUrl)
    .then(() => console.log('数据库链接成功'))
    .catch(err => { console.log('连接失败' + err) })
module.exports = mongoose