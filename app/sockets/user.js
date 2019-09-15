const User = require('../models/user.model');
const { errorHandler } = require('./error');

module.exports = function (socket, currentUser) {

  const { _id: currentUserId } = currentUser;

  // get current user data when init
  User
    .findById(currentUserId)
    .select('username image firstName lastName country phone unreadMessages isOnline')
    .then((user) => {
      const {
        username,
        image,
        firstName,
        lastName,
        country,
        phone,
        unreadMessages,
      } = user;

      const auth = {
        _id: currentUserId,
      };

      const profile = {
        username,
        image,
        firstName,
        lastName,
        country,
        phone,
      };

      user.isOnline = true;
      user.save()
        .then((result) => {
          socket.emit('user:set', auth, profile);
          socket.emit('messages::unread:set', unreadMessages);
          socket.broadcast.emit('user::status:set', { _id: currentUserId, isOnline: true });
        })
        .catch((error) => {
          errorHandler(socket)(error);
        })
    })
    .catch((error) => {
      errorHandler(socket)(error);
    });

  const statusUser = (isOnline) => {
    User
      .findByIdAndUpdate( currentUserId, { isOnline })
      .then(() => {
        socket.broadcast.emit('user::status:set', { _id: currentUserId, isOnline });
      })
      .catch((error) => {
        errorHandler(socket)(error);
      });
  };

  // disconnect
  socket.on('disconnect', (reason) => {
    if (reason === 'io server disconnect') {
      // the disconnection was initiated by the server, you need to reconnect manually
      socket.connect();
    }

    statusUser(false)
  });

  // join current user to global room
  socket.on('join::user', (id) => {
    socket.join(id);
  });

  socket.on('logout', () => {
    statusUser(false)
  });
};