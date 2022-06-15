const express = require('express');
const mongoose = require('mongoose');
const api = require('./server/routes/api.js');

// mongoose.connect('mongodb://localhost/nasa', { useNewUrlParser: true });
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization, Content-Length, X-Requested-With'
  );

  next();
});

app.use('/', api);

const PORT = 5000;
app.listen(PORT, console.log(`listening on ${PORT}`));
