import { emitEvent } from "../../../utils/event";

const sendMessage = (roomId, textMessage, userId) => () => {
  emitEvent('message::send:get', { roomId, textMessage, userId });
  emitEvent('message::new:get', { roomId, textMessage });
};

export default sendMessage;