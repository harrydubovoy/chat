const User = require('../models/user.model');
const { errorHandler } = require('./error');

const { getID } = require('../../utils');

module.exports = function Rooms(socket, currentUser) {

  const { _id: currentUserId, username } = currentUser;

  socket.on('message::new:get', ({ roomId, textMessage }) => {
    const userId = getID(roomId, currentUserId);

    User
      .findById(userId)
      .then((result) => {
        const { unreadMessages } = result;
        const hasUnreadMessages = unreadMessages.includes(roomId);

        socket.to(userId).emit('message::notification', {roomId, textMessage, user: username});
        if(!hasUnreadMessages) {
          unreadMessages.push(roomId);
          result
            .save()
            .then(() => {
              socket.to(userId).emit('message::new:set', roomId);
            })
            .catch((error) => {
              errorHandler(socket)(error);
            });
        }
      })
      .catch((error) => {
        errorHandler(socket)(error);
      });
  });


  socket.on('message::read:get', (roomId) => {

    User
      .findById(currentUserId)
      .then((result) => {
        const { unreadMessages } = result;
        const hasUnreadMessages = unreadMessages.includes(roomId);

        if(hasUnreadMessages) {
          unreadMessages.splice(unreadMessages.indexOf(roomId), 1);

          result
            .save()
            .then(() => {
              socket.emit('message::read:set', roomId);
            })
            .catch((error) => {
              errorHandler(socket)(error);
            });
        }
      })
      .catch((error) => {
        errorHandler(socket)(error);
      });
  });

  // typing status
  socket.on('message::start-typing', (roomId) => {
    const userId = getID(roomId, currentUserId);

    socket.to(userId).emit('message::start-typing', roomId);
    setTimeout(() => socket.to(userId).emit('message::end-typing', roomId), 2000);
  });

};