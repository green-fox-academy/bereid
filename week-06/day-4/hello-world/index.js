const express = require('express');
const app = express();
const PORT = 4500;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home', {
        title: 'Hello World!',
    });
})

app.listen(PORT, () => {
    console.log(`The server is running on PORT: ${PORT}`);
})