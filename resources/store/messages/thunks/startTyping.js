import { emitEvent } from '../../../utils/event';

const startTyping = (roomId) => () => {
  emitEvent('message::start-typing', roomId);
};

export default startTyping;