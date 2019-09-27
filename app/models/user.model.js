const { Schema, model } = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');


const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  image: '',
  firstName: '',
  lastName: '',
  phone: '',
  country: '',
  rooms: [],
  unreadMessages: [],
  isOnline: false,
});

UserSchema.plugin(passportLocalMongoose, {
  usernameField: 'email'
});

const User = model('User', UserSchema);

module.exports = User;