const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const { connectToDatabase } = require('./database/connect');
const fruitRoutes = require('./router/fruitRouter');

const app = express();

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes
app.use('/api', fruitRoutes);

// home route
app.get('/', (req, res) => {
    res.send('FRUITS API WORKING ✅');
});

// start server
app.listen(3000, async () => {
    await connectToDatabase();
    console.log('Server running on port 3000');
});