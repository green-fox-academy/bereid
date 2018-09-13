'use strict';
const express = require('express');
const path = require('path');
const app = express();
const PORT = 4000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home', {
        title: 'Home page',
        header: 'GreenFoxAcademy',
    });
})

app.get('/products/:id', (req, res) => {
    res.render('home', {
        title: 'Products page',
        header: req.params.id,
        withGoodbye: req.query.withGoodbye === 'true',
    });
})

app.listen(PORT, () => {
    console.log(`The server is running on the Port: ${PORT}`);
})