var express = require('express');
var router = express.Router();
var db = require('../database');

router.post('/', (req, res, next) => {
  addUser(req, res, next);
  })

addUser =(req, res, next) => {
  var name = req.body.name
    var email = req.body.email
    var username = req.body.username
    var password = req.body.password
    var sql = `INSERT INTO client (Name, ContactInfo , Username, Password ) VALUES (?, ?, ?, ?)`
    db.query(sql,[name,email, username, password], function (err, result) {
      if (err) {
        console.log(err)
      } 
      else {
        res.redirect('/users');  
        next();
      }
    })
}
  module.exports = router;