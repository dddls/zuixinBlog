var express = require('express');
var router = express.Router();

//文章模板导入
let Article = require('../models/article')

let moment = require('moment')

/* GET home page. */
router.get('/', async function (req, res, next) {
  // let data = await Article.find()
  // console.log(data)
  let cPage = req.query.page || 1
  let userName = req.session.userName || ''

  let data = {
    blogList: [],//文章列表
    currPage: cPage,//当前页数
    pageTotle: '',//总页数
  }
  //设定每页渲染的条数
  let pageSize = 4
  //确定每页显示的数据
  data.blogList = await Article.find()
    .limit(pageSize)//限定展示出来的条数
    .sort({_id:'desc'})//倒序
    .skip((data.currPage - 1) * pageSize)//限定从第几条开始截取
  //总数据
  let blogAll = await Article.find()
  //总页码
  data.pageTotle = Math.ceil(blogAll.length / pageSize)
  // console.log(data.pageTotle)
  //将所有的时间戳转换为时间
  data.blogList.map(item => {
    let a = moment(item.id).utcOffset(480).format( 'YYYY-MM-DD HH:mm:ss');
    item['time'] = a
  })

  res.render('index', { userName, data });
});
//登录路由设置
router.get('/login', function (req, res) {
  res.render('login', {})
})
//注册路由设置
router.get('/regist', function (req, res) {
  res.render('regist', {})
})
//写文章页面路由设置
router.get('/write', function (req, res) {
  let userName = req.session.userName || ''
  res.render('write', { userName })
})
//详情页路由设置
router.get('/article', function (req, res) {
  let userName = req.session.userName || ''
  res.render('details', { userName })
})

module.exports = router;
