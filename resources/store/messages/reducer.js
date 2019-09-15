import { handleActions } from 'redux-actions';

// Action types
import {
  START_TYPING,
  END_TYPING,
  UNREAD_MESSAGES,
  NEW_MESSAGE,
  READ_MESSAGE,
} from '../types';

const initialState = {
  typing: null,
  unreadMessages: [],
};

const unreadMessages = (state, { payload: unreadMessages }) => ({
  ...state,
  unreadMessages,
});

const typing = (state, { payload: typing }) => ({
  ...state,
  typing,
});

const readMessages = (state, { payload }) => {
  const { unreadMessages } = state;
  const hasUnreadMessages = unreadMessages.includes(payload);

  if(hasUnreadMessages) {
    const messages = unreadMessages.slice();
    messages.splice(messages.indexOf(payload), 1);

    return {
      ...state,
      unreadMessages: messages
    }
  }

  return state;
};

const newMessage = (state, { payload }) => {
  const { unreadMessages } = state;
  const hasUnreadMessages = unreadMessages.includes(payload);

  if(!hasUnreadMessages) {
    return {
      ...state,
      unreadMessages: [
        ...unreadMessages,
        payload
      ]
    }
  }

  return state;
};


export default handleActions({
  [START_TYPING]: typing,
  [END_TYPING]: typing,
  [UNREAD_MESSAGES]: unreadMessages,
  [NEW_MESSAGE]: newMessage,
  [READ_MESSAGE]: readMessages,
}, initialState);