'use strict';
const express = require('express');
const path = require('path');
const app = express();
const PORT = 8080;
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/doubling', (req, res) => {
    let inputNumber = req.query.input;
    if (req.query.input) {
        res.json({
            "received": inputNumber,
            "result": inputNumber * 2,
        })
    } else {
        res.json({
            "error": "Please provide an input!",
        })
    };
})

app.get('/greeter', (req, res) => {
    let name = req.query.name;
    let title = req.query.title;
    if (req.query.name && req.query.title) {
        res.json({"welcome_message": `Oh, hi there ${name}, my dear ${title}!`})
    } else if (req.query.name) {
        res.json({"error": "Please provide a title!"})
    } else if (req.query.title) {
        res.json({"error": "Please provide a name!"})
    }
});

app.get('/appenda/:string', (req, res) => {
    let string = req.params.string;
    if (req.params.string){
        res.json({
            "appended": `${string}a`
        })
    } else {
        res.status(404).json({
            error: "Please add a string"
        })
    }
})

function factorial (number){
    if(number === 1){
        return 1;
    } else {
        return number * factorial(number -1);
    }
}

function countDown (number){
    if(number === 1){
        return 1;
    } else if (number < 1) {
        throw new Error('Cant do this with negative numbers, bro');
    } else {
        return number + countDown(number -1);
    }
}

app.post('dountil/:action', jsonParser, (req, res) => {
    let number = req.body.until;
    if (req.params.action === 'sum') {
        res.json({
            "result": countDown(number),
        })
    } else if (req.params.action === 'factor'){
        res.json({
            "result": factorial(number),
        })
    } else {
        res.json({
            "error": "Please provide a number!"
        })
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on the PORT: ${PORT}`);
});