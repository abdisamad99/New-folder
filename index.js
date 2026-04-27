const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const { connectToDatabase } = require('./database/connect');
const app = express();

app.use(bodyParser.json(bodyParser.urlencoded({ extended: true })));

app.get('/', (req, res) => {
    res.send('NEW FOLDER');
});


app.listen(3000, () => {
    connectToDatabase();
    console.log('Server is running on port 5000');
})