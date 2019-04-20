//require('./config/config');
require('./models/db');
require('./config/passportConfig');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose'); // Node Tool for MongoDB

const rtsIndex = require('./routes/index.router');

var app = express();

mongoose.connect("mongodb+srv://checkoutfood:checkoutfood123@cluster0-5ffrd.mongodb.net/test?retryWrites=true", {
  useMongoClient: true,
}, (err) => {
  // Check if database was able to connect
  if (err) {
    console.log('Could NOT connect to database: ', err); // Return error message
  } else {
    console.log('Connected to db'); // Return success message
  }
});



// middleware
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' })); // Allows cross origin in development only
app.use(passport.initialize());
app.use('/api', rtsIndex);
app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(express.static(__dirname + '/public')); // Provide static directory for frontend

// error handler
app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }
    else{
        console.log(err);
    }
});
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

// start server
app.listen(process.env.PORT, () => console.log(`Server started at port : ${process.env.PORT}`));