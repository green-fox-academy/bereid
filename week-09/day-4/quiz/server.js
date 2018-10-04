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

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/assets/index.html'))
});

app.get('/modify-questions', (req, res) => {
  res.sendFile(path.join(__dirname, '/assets/modify-questions.html'))
});

app.get('/game', (req, res) => {
  connection.query(`SELECT id, question 
  FROM questions ORDER BY RAND() LIMIT 1`, (error, result) => {
      if (error) {
        res.status(400).send('Database error' + error.message);
      } else {
        console.log(result[0].id)
        connection.query(`SELECT answer, question_id, id, is_correct
        FROM answers
        WHERE question_id=${result[0].id}`, (innerError, innerResult) => {
            if (innerError) {
              res.status(400).send('Database error' + innerError.message);
            } else {
              res.send({
                'id': result[0].id,
                'question': result[0].question,
                'answers': innerResult
              })
            }
          });
      }
    });
});

app.get('/questions', (req, res) => {

});

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});