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