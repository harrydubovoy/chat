const socketioJwt = require('socketio-jwt');

// Constants
const { JWT_SECRET } = require('../../constants');

module.exports = function(io) {
  io.sockets
    .on('connection', socketioJwt.authorize({
      secret: JWT_SECRET,
    }))
    .on('authenticated', (socket) => {
      const { decoded_token: { data }} = socket;

      const currentUser = {
        _id: data._id,
        username: data.username,
      };

      //Current user
      require('./user')(socket, currentUser);
      // Users
      require('./users')(socket, currentUser);
      // Rooms
      require('./rooms')(socket, currentUser);
      // Messages
      require('./messages')(socket, currentUser);
      // Profile
      require('./profile')(socket, currentUser);
    });
};