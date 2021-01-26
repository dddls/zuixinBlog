var express = require('express');
var router = express.Router();
let Joi = require('joi');
const { schema } = require('../models/user');

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

  //用户密码与确认密码是否一致的验证
  // if(userInfo.password !=userInfo.passwordC){
  //   let error = {
  //     status:0,//错误编码
  //     stack:''//错误代码
  //   }
  //     res.render('error',{error,message:'密码不一致'})
  // }

  //joi 验证
  // let userInfo = {
  //   useName: req.body.useName,
  //   password: req.body.password,
  //   passwordC: req.body.passwordC,
  // }
  // const schema = Joi.object({
  //   useName: Joi.string().min(2).max(12).required().error(new Error('用户名不符合验证规则')),
  //   password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required().error(new Error('密码格式不符合要求')),
  //   passwordC: Joi.ref('password'),
  // })
  //try{
  //   const value = await schema.validateAsync(userInfo);
  // }
  // catch (err){
  //   console.log(err.message);
  // }


  //页面表单数据，放入模型
  let userI = new User(userInfo)

  //保存
  userI.save((err, result) => {
    if (!err) {
      res.send(result)
    }
  })
})

//登录 -----查询
router.post('/login', (req, res, next) => {
  //从表单获取数据
  let userInfo = {
    userName: req.body.userName,
    password: req.body.password,
  }
  //查询
  User.findOne(userInfo, function(err, result){
    //错误处理
    if (err) {
      return console.log(err);
    }
    if (result == null) {
      console.log('登录失败')
      res.redirect('/regist')
    } else {
      //将用户信息存储
      req.session.userName = userInfo.userName

      console.log('登录成功')
      //路由重定向
      res.redirect('/')
    }
  })
})

module.exports = router;