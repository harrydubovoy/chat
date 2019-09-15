const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('./app/models/user.model');

passport.use(User.createStrategy());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());