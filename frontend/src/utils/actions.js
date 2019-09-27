import { emitEvent } from './event';

export const startTyping = (roomId) => () => {
  emitEvent('message::start-typing', roomId);
};

export const endTyping = (roomId) => () => {
  emitEvent('message::end-typing', roomId);
};