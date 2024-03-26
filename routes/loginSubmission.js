var express = require('express');
var router = express.Router();
var db = require('../database');

router.post('/', (req, res, next) => {

  var username = req.body.username;
  var password = req.body.password;
  console.log(username);
  console.log(password);
  var sql = "SELECT * FROM client WHERE Username =? and Password =?";
  db.execute(sql, [username, password], function (err, result) {
    if (err) {
      console.log(err);
    }
    else {
      console.log(result.length, "hello");


      if (result.length == 1) {
        res.redirect('/users');
        next();
      }
      else {
        res.redirect('/register');
        next();
      }
    }
  })
});

module.exports = router;