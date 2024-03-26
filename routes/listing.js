var express = require('express');
var router = express.Router();
var db = require('../database');
/* GET users listing. */
router.get('/', function(req, res, next) {
  getAllProperties(req, res);
});

getAllProperties =(req, res) => {
  var sql = `SELECT name, description , address, price  FROM property`
  db.query(sql, 
    function (err, result) {
    if (err) {
      console.log(err)
    } 
    else {
      req.flash('success', 'Data stored!')
      res.render('listing', { "data": result }); 
    }
  })
}

module.exports = router;
