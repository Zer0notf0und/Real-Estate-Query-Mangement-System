var express = require('express');
var router = express.Router();
var db = require('../database');

router.post('/', (req, res, next) => {
  login(req, res, next);
  })
login =(req, res, next) => {
      var typename = req.body.typename;
      var name = req.body.name;
      var sql = "SELECT name, description , address, price  FROM property ";
      var isStarted = false;
      var list = [];
      if(name){
        sql += (isStarted === true) ?" AND " :" WHERE ";  
        sql += " name like ?";
        list.push("%"+name + "%");
        isStarted = true;
      }
      if(typename){
        sql += (isStarted === true) ?" AND " :" WHERE ";  
        sql += " type = ?";
        list.push(typename);
        isStarted = true;
      }
      db.query(sql, list, function (err, result) {
        if (err) {
          console.log(err)
        } 
        else {
          console.log(result.length)
            res.render('listing', { "data": result }); 
        }
      })
  }

  module.exports = router;