import socket from "../socket";
import { Notification } from "../components/notification";

const onEvent = (event, cb) => {
  socket.on(event, cb);
};

const emitEvent = (event, payload) => {
  socket.emit(event, payload);
};

const onError = (error) => {
  const { message } = error.response.data;
  Notification(message, 'error');
  console.dir(error);
};

export {
  emitEvent,
  onEvent,
  onError,
}