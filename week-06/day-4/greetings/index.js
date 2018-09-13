'use strict';
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home', {
        title: '',
    });
})

app.listen(PORT, () => {
    console.log(`Server is listening to PORT: ${PORT}`);
})