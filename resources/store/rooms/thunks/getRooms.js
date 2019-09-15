import { emitEvent } from "../../../utils/event";

const getRooms = (roomId) => (dispatch, getState) => {
  const { list } = getState().rooms;

  emitEvent('room::join', roomId);

  if(!list[roomId]) {
    emitEvent('message::story:get', roomId);
  }
};

export default getRooms;