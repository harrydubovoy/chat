const User = require('../models/user.model');
const { errorHandler } = require('./error');

module.exports = function Rooms(socket, currentUser) {

  const { _id: currentUserId } = currentUser;

  socket.on('profile::update:get', (data) => {

    User
      .findByIdAndUpdate(currentUserId, data)
      .then(() => {
        socket.emit('profile::update:set', data);
      })
      .catch((error) => {
        errorHandler(socket)(error);
      });
  })
};