import { emitEvent } from '../../../utils/event';

const endTyping = (roomId) => () => {
  emitEvent('message::start-typing', roomId);
};

export default endTyping;