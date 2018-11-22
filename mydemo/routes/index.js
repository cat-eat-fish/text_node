var express = require('express');
var router = express.Router();
/* 导入mysql模块 */
var mysql = require('mysql');
var pool = mysql.createPool({
  host:'localhost',
  port     : 3306, // 数据库连接的端口号 默认是3306  
  database : 'myboke', // 需要查询的数据库  
  user     : 'root', // 用户名  
  password : 'root' // 密码，我的密码是空。所以是空字符串  
});     // 使用DBConfig.js的配置信息创建一个MySQL连接池

/* GET home page. */
router.get('/api/', function(req, res, next) {
  pool.query('select  * from article', function(err, rows, fields) {
    if (err) throw err;
    res.send(rows)
  });
});

router.get('/api/article/:id', function(req, res, next) {
  var id=req.params.id ? req.params.id : 1;
  pool.query(`select  * from article where id=${id}`, function(err, rows, fields) {
    if (err) throw err;
    res.send(rows)
  });
});


module.exports = router;
