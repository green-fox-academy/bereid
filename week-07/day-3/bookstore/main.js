'use strict';
const express = require('express');
const path = require('path');
const app = express();
const PORT = 8080;
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const mysql = require('mysql');

app.use('/assets', express.static('assets'));

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Bereid+123',
  database: 'bookstore',
});

conn.connect((err) => {
  if (err) {
    console.log('Connection failed to database: ' + err);
    return;
  }
  console.log('Connection established');
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/books', (req, res) => {
  conn.query(
  `SELECT book_name, aut_name, cate_descrip, pub_name, book_price
  FROM book_mast
  INNER JOIN author
  ON book_mast.aut_id = author.aut_id
  INNER JOIN category 
  ON book_mast.cate_id = category.cate_id 
  INNER JOIN publisher 
  ON book_mast.pub_id = publisher.pub_id;`, 
  (err, result) => {
    if (err) {
      console.log('Failed to select column' + err.message);
      res.status(500).send('Database error, bro')
    }
    res.send(result);
  })
});

app.listen(PORT, () => {
  console.log(`Server is running on the PORT: ${PORT}`);
});


