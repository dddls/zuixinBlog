let mongoose = require('../mongodb/db')
//Schema
let Schema = mongoose.Schema

let articleSchema = new Schema({
    title: String,
    id:Number,
    content: String,
})
//Model-------将会生成数据库集合名（复数）
let Article = mongoose.model('article',articleSchema)

module.exports = Article