import { handleActions } from "redux-actions";
import uuidv4 from 'uuid/v4';

// Action types
import {
  SET_ROOM,
  SET_MESSAGE,
  SET_CURRENT_ROOM,
} from '../types';

const initialState = {
  current: null,
  list: {}
};

const setCurrentRoom = (state, { payload: current }) => ({
  ...state,
  current,
});

const setRoom = (state, { payload: { roomId, messages }}) => ({
  ...state,
  list: {
    ...state.list,
    [roomId]: messages
  }
});

const setMessage = (state, { payload: { roomId, textMessage, userId }}) => {
  const oldMessages = state.list[roomId] || [];

  return {
    ...state,
    list: {
      ...state.list,
      [roomId]: [
        ...oldMessages,
        {
          _id: uuidv4(),
          userId,
          textMessage,
          date: Date.now()
        }
      ]
    }
  }
};

export default handleActions({
  [SET_CURRENT_ROOM]: setCurrentRoom,
  [SET_ROOM]: setRoom,
  [SET_MESSAGE]: setMessage,
}, initialState);