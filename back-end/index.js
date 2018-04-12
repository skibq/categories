const express = require('express')
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.json())

const mysql_lib = require('mysql')
const mysql = mysql_lib.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'budget'
})
mysql.connect()

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});



app.get('/categories', function(req, res) {
  mysql.query(`SELECT * FROM categories ORDER BY category_order ASC`, function(err, rows, fields) {
    if (err) throw err
    res.send(rows)
  })
})


app.post('/categories', function(req, res) {
  mysql.query(`INSERT INTO categories (category_name, category_order) VALUES ('${req.body.category_name}', ${req.body.category_order}) `, function (err, result) {
    if (err) throw err
    res.send(result)
  })
})

app.put('/categories/:category_ID', function(req, res) {
  mysql.query(`UPDATE categories SET category_order = ${req.body.category_order} WHERE category_ID = ${req.params.category_ID}`, function (err, result) {
    if (err) throw err
    res.send(result)
  })
})

app.delete('/categories/:category_ID', function(req, res) {
  mysql.query(`DELETE FROM categories WHERE category_ID = ${req.params.category_ID}`, function(err, result) {
    if (err) throw err
    res.send(result)
  })
})


app.listen(3000, () => console.log('Example app listening on port 3000!'))