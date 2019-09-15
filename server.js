const path = require('path');
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

// mongoose
mongoose.Promise = global.Promise;
mongoose.set('debug', false);

//static files
app.use(express.static(path.join(__dirname, 'build')));
app.use(express.static(path.join(__dirname, 'storage')));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// passport init
app.use(passport.initialize());
require('./passport.config');

// database connect string
const connect = `mongodb://convert:convert123456@ds263127.mlab.com:63127/convert`;

// start server
mongoose.connect(connect, {useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false}, (error) => {

  if (error) {
    console.error('Database Connect: ', error);
  }

  // http
  app.use('/', require('./routes'));
  // socket
  require('./app/sockets')(io);

  http.listen(3000, () => console.log(`listening on *: http://localhost:3000`))
});