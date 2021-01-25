var express = require('express');
var router = express.Router();

//将用户模板导入
let User = require('../models/user')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

//实现用户提交信息，注册事项
//response 相应
//request 请求
router.post('/addUser', (req, res, next) => {
  //用户填写的表单信息可以通过req.body获取到
  console.log(req.body);

  //向数据库添加用户信息
  let userInfo = {
    userName: req.body.userName,
    password: req.body.password,
    passwordC: req.body.passwordC,
  }
  //页面表单数据，放入模型
  let userI = new User(userInfo)

  //保存
  userI.save((err, result) => {
    if (!err) {
      res.send(result)
    }
  })
})
module.exports = router;