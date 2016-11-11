var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/test',function(req, res, next) {
  res.send('Hello from preset-loader-api');
  next();
});

mongoose.connect('mongodb://localhost/preset-loader-app');
mongoose.connection.once('open', function() {

  console.log('Listening on port 3000');
  app.listen(3000);
});
