import { onEvent, emitEvent } from "../utils/event";
import { isCurrentRoom } from "../utils";
import { MessageNotification } from '../components/Notification';

// Action types
import {
  SET_MESSAGE,
  NEW_MESSAGE,
  READ_MESSAGE,
  UNREAD_MESSAGES,
  START_TYPING,
} from "../store/types";

const messages = (store) => {

  // get unread messages
  onEvent('messages::unread:set', (messages) => {
    store.dispatch({ type: UNREAD_MESSAGES, payload: messages });
  });

  // send messages
  onEvent('message::send:set', ({ roomId, textMessage, userId }) => {
    store.dispatch({ type: SET_MESSAGE, payload: { roomId, textMessage, userId } });
  });

  // new message
  onEvent('message::new:set', (roomId) => {
    if(!isCurrentRoom(roomId)) {
      store.dispatch({type: NEW_MESSAGE, payload: roomId});
    } else {
      emitEvent('message::read:get', roomId);
      store.dispatch({ type: READ_MESSAGE, payload: roomId });
    }
  });

  //notification
  onEvent('message::notification', ({ roomId, user, textMessage }) => {
    if(!isCurrentRoom(roomId)) {
      MessageNotification(user, textMessage)
    }
  });

  // read message
  onEvent('message::read:set', (roomId) => {
    store.dispatch({ type: READ_MESSAGE, payload: roomId });
  });

  // start typing
  onEvent('message::start-typing', (roomId) => {
    if(isCurrentRoom(roomId)) {
      store.dispatch({type: START_TYPING, payload: roomId});
    }
  });

};

export default messages;