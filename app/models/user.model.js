const { Schema, model } = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');


const UserSchema = new Schema({
  username: {
    type: String,
  },
  image: {
    type: String,
    default: '',
  },
  firstName: {
    type: String,
    default: '',
  },
  lastName: {
    type: String,
    default: '',
  },
  phone: {
    type: String,
    default: '',
  },
  country: {
    type: String,
    default: '',
  },
  email: {
    type: String,
  },
  rooms: [],
  unreadMessages: [],
  isOnline: {
    type: Boolean,
    default: false,
  },
});

UserSchema.plugin(passportLocalMongoose, {
  usernameField: 'email'
});

const User = model('User', UserSchema);

module.exports = User;