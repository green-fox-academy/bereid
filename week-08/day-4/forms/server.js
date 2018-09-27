'use strict';
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());

// app.get('/postElements', (req, res) => {
//     res.sendFile(path.join(__dirname, 'index.html'));
// });

app.post('/api/postElements', (req, res, err) => {
    console.log(req.body);
    res.json(req.body);
});

app.listen(PORT, ()=> {
    console.log(`Server is running on the PORT: ${PORT}`);
});
