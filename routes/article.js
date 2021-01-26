var express = require('express');
var router = express.Router();

//将模板导入
let Article = require('../models/article')

//添加博客接口
router.post('/add', (req, res, next) => {
   console.log(req.body)

   //向数据库添加用户信息
   let articleInfo = {
      title: req.body.title,
      content: req.body.content,
   }
   //页面表单数据，放入模型
   let ArticleI = new Article(articleInfo)

   //保存
   ArticleI.save((err, result) => {
      if (!err) {
         res.send(result)
      }
   })
})

module.exports = router;