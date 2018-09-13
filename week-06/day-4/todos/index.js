'use strict';
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
const todos = [
    'get up',
    'survive',
    'go back to bed',
  ];

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home', {
        title: 'Todos',
        todos: todos,
    })
});

app.listen(PORT, ()=> {
    console.log(`Server is running on the PORT: ${PORT}`);
});