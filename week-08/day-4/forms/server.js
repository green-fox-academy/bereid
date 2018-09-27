'use strict';
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, ()=> {
    console.log(`Server is running on the PORT: ${PORT}`);
});
