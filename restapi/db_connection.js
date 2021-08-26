var mysql = require('mysql')
const pool = mysql.createConnection({
  host: '49.236.208.6',
  user: 'selena',
  password: 'DNL123$321',
  database: 'selena',
  port: '23306'
});

// connection.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//   });
  

// connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
//   if (err) throw err

//   console.log('The solution is: ', rows[0].solution)
// });

// connection.end()
module.exports = pool;