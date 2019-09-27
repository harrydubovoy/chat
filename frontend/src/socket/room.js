import { onEvent } from "../utils/event";
import { isCurrentRoom } from "../utils";

// Action types
import {
  SET_ROOM,
  END_TYPING,
} from "../store/types";

const room = (store) => {

  // get messages story for selected user
  onEvent('message::story:set', ({ roomId, userId, messages }) => {
    if(roomId) {
      store.dispatch({ type: SET_ROOM, payload: { roomId, userId, messages } });
    }
  });

  // end typing
  onEvent('message::end-typing', (roomId) => {
    if(isCurrentRoom(roomId)) {
      store.dispatch({type: END_TYPING, payload: null});
    }
  });

};

export default room