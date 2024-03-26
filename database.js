var mysql = require('mysql2')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', //
  password: 'zero', //
  database: 'props',
})
connection.connect((err) => {
  if (err) {
    console.log(err)
    return
  }
  console.log('Database connected')
})
module.exports = connection