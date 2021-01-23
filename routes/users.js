var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//实现用户提交信息，注册事项
//response 相应
//request 请求
router.post('/addUser',(req,res,next) =>{
  console.log(req.body);
  //用户填写的表单信息可以通过req.body获取到
})

module.exports = router;
