var express = require('express');
var router = express.Router();
var db = require('../database');
/* GET users listing. */
router.get('/', function(req, res, next) {
  getUsers(req, res);
});

getUsers =(req, res) => {
  var sql = `SELECT Name, ContactInfo , Username, Password FROM client`
  db.query(sql, 
    function (err, result) {
    if (err) {
      console.log(err)
    } 
    else {
      req.flash('success', 'Data stored!')
      res.render('users', { users: result }); 
    }
  })
}

module.exports = router;
