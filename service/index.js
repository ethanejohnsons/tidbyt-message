require('dotenv').config();
const express = require('express');
const fs = require('fs');

const app = express();

app.listen(3999, () => {
    console.log("Message service is ready.");
});

app.get('/message', (req, res) => {
    let message = fs.readFileSync(process.env.MESSAGE_PATH, 'utf8');
    res.end(JSON.stringify({ message }));
});

app.get('/image', (req, res) => {
    let image = fs.readFileSync(process.env.IMAGE_PATH);
    res.writeHead(200, {'Content-Type': 'image/png'});
    res.end(image);
})