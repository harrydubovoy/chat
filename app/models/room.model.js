const { Schema, model } = require('mongoose');

const MessageSchema = new Schema({
    userId: String,
    textMessage: String,
    date: {
      type: Date,
      default: Date.now
    }
  });

const RoomSchema = new Schema({
  roomId: String,
  messages: [MessageSchema]
});

const Room = model('Room', RoomSchema);

module.exports = Room;