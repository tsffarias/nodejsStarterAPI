const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Import Routes
const postsRoute = require('./routes/posts');


// Middlewares
app.use(bodyParser.json());
app.use(cors());

app.use('/posts', postsRoute);

app.use('/posts', (req, res, next) => {
    console.log('This is a middleware running')
    next();
});

// routes
app.get('/', (req, res) => {
    res.send('home');
});

// Connect to DB
mongoose.connect("mongodb://localhost:27017/backendapi", { useNewUrlParser: true }, () => {
    console.log('Connected to db!')
});

// listening to the server
app.listen(port, () => {
    console.log(`Server running at port: ${port}`);
});