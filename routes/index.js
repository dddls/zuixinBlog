var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  let userName = req.session.userName || ''
  res.render('index', { userName });
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
