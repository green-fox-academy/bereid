const express = require('express');
const app = express();
const PORT = 3000;

app.get('/ping', (req, res) => {
    res.json({
        message: 'pong',
        messageMessage : 'ping & pong',
    })
})

app.get('/', (req, res) => {
    res.json({
        message: 'HELO TES!',
    })
})

app.listen(PORT, () => {
    console.log(`The server is running on Port: ${PORT}`);
})