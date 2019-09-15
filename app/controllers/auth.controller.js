const passport = require('passport');
const jwt = require('jsonwebtoken');

// Service
const EventBus = require('../services/event-bus.service');

// Model
const User = require('../models/user.model');

// Constants
const { JWT_SECRET } = require('../../constants');

function register(req, res) {

  const { user: { username, email, password } } = req.body;

  User.register(new User({ email, username }), password, function(error, user) {
    if (error) {
      console.log(error);

      res
        .status(400)
        .json({
          message: 'Such user already exists'
        });

      return;
    }

    res.json({
      messages: "Register successful",
    });

    EventBus.emit('register', user);
  });
}

function login(req, res, next) {
  passport.authenticate('local', function (error, user) {

    if(error) {
      console.error(error);
      res.status(500).json({
        message: error
      });
    }

    if(user) {
      const token = jwt.sign({
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
        data: user,
      }, JWT_SECRET);

      user.isOnline = true;
      user
        .save()
        .then((result) => {
          res.json({
            token,
            user: result
          });
        })
        .catch((error) => {
          console.error(`Error user login: `, error);
          res.status(500).json({ message: `Error user login: `, error });
        });
    } else {
      console.error(error);
      res.status(400).json({
        message: `Authorization error: no such user or incorrect data`
      });
    }

  })(req, res, next);
}


function loggedIn(req, res, next) {
  next();
}

module.exports = {
  login,
  register,
  loggedIn,
};