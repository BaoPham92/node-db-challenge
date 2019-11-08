const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const server = express();
const settings = [express.json(), helmet(), morgan('combined')];
server.use(settings);

server.get('/', (req, res) => {
    res.status(200).json({ message: 'successfully connected!' })
})

module.exports = server;