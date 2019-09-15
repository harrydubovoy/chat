const Room = require('../models/room.model');
const { errorHandler } = require('./error');

module.exports = function Rooms(socket, currentUser) {

  const { _id: currentUserId } = currentUser;

  const sendMessage = (roomId, textMessage, userId) => {
    socket.emit('message::send:set', { roomId, textMessage, userId });
    socket.to(roomId).emit('message::send:set', { roomId, textMessage, userId });
  };

  const setMessagesStory = (roomId = null, messages = []) => {
    socket.emit("message::story:set", {
      roomId,
      messages
    });
  };

  const create = (roomId, textMessage, user) => {
    const newRoom = new Room({
      roomId,
      messages: [{
        textMessage,
        user
      }]
    });

    newRoom
      .save()
      .then((result) => {
        console.log('Result after create room', result);
        sendMessage(roomId, textMessage, currentUserId);
      })
      .catch((error) => {
        errorHandler(socket)(error);
      })
  };

  // join user in global room
  socket.on('room::join', (roomId) => {
    socket.join(roomId);
  });

  // message story
  socket.on('message::story:get', (roomId) => {
    socket.join(roomId);

    Room
      .findOne({ roomId })
      .select('roomId messages')
      .then((result) => {
        if(result) {
          const { roomId, messages } = result;
          setMessagesStory(roomId, messages);

        } else {
          setMessagesStory();
        }
      })
      .catch((error) => {
        errorHandler(socket)(error);
      });
  });


  socket.on("message::send:get", ({ roomId, textMessage, userId }) => {

    //todo: promise all

    Room
      .findOne({ roomId })
      .then((result) => {
        if(result) {
          const { messages } = result;
          messages.push({ textMessage, userId });

          result
            .save()
            .then(() => {
              sendMessage(roomId, textMessage, userId);
            })
            .catch((error) => {
              errorHandler(socket)(error);
            });
        } else {
          create(roomId, textMessage, userId);
        }
      })
      .catch((error) => {
        errorHandler(socket)(error);
      });
  });
};