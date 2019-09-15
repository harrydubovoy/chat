// Service
const EventBus = require('../services/event-bus.service');

// Model
const User = require('../models/user.model');

const { createID } = require('../../utils');

module.exports = function (socket, currentUser) {

  const { _id: currentUserId } = currentUser;

  socket.on('users::get', () => {

    User
      .find()
      .select('username isOnline image country')
      .then((result) => {
        const users = result
          .filter((user) => user._id != currentUserId)
          .reduce((data, user) => {
            data[user._id] = {
              username: user.username,
              roomId: createID(user._id, currentUserId),
              isOnline: user.isOnline,
              image: user.image,
              country: user.country,
            };
            return data;
          }, {});

        socket.emit('users::set', users);
      })
      .catch((error) => {
        console.error('Get all users error', error)
      })
  });

  EventBus.on('register', (user) => {
    socket.broadcast.emit('users::added:set', user);
  });

  socket.on('users::added:get', (user) => {

    const newUser = {
      [user._id]: {
        roomId: createID(user._id, currentUserId),
        username: user.username,
        isOnline: user.isOnline,
        image: user.image,
        country: user.country,
      }
    };

    socket.emit('users::update:set', newUser);
  })

};