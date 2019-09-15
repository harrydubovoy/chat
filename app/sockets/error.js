
const errorHandler = (socket) => (error) => {
  console.error('Error! Something went wrong...', error);
  return socket.emit('error', { message: `Error! Something went wrong... ${error}`,  });
};

module.exports = {
  errorHandler
};