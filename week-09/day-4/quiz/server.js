'use strict';

const express = require('express');
const app = express();
const PORT = 8080;
const mysql = require('mysql');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const path = require('path');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Bereid+123',
  database: 'quiz',
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/assets', express.static('assets'));

connection.connect((err) => {
  if (err) {
    console.log('Connection failed to database: ' + err);
    return;
  }
  console.log('Connection established');
});

app.get('/game', (req, res) => {
  res.sendFile(path.join(__dirname, '/assets/index.html'))
});

app.get('/questions', (req, res) => {
  res.sendFile(path.join(__dirname, '/assets/questions.html'))
});

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});