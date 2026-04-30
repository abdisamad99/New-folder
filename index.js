const express = require('express');
const bodyparser = require('body-parser');
require('dotenv').config();

const { connectToDatabase } = require('./database/connect');
const fruitRoutes = require('./router/fruitRouter');

const app = express();

// middleware
app.use(express.json());

// routes
app.use('/api', fruitRoutes);

// home
app.get('/', (req, res) => {
    res.send('FRUITS API WORKING');
});

// start
app.listen(3000, async () => {
    await connectToDatabase();
    console.log('Server running on port 3000');
});