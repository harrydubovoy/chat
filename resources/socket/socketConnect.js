import { push } from "react-router-redux";
import socket from './index';

// Utils
import { getTokent } from "../utils";

// Action types
import {
  LOGOUT,
} from "../store/types";

// Socket modules
import user from './user';
import users from './users';
import room from './room';
import messages from './messages';
import error from './error';

const socketConnect = (store) => {

  socket.on('connect', () => {
    const token = getTokent();

    socket
      .emit('authenticate', { token })
      .on('authenticated', () => {

        user(store);
        users(store);
        room(store);
        messages(store);
        error(store);

      })
      .on('unauthorized', (error) => {
        if (error.data.type === 'UnauthorizedError' || error.data.code === 'invalid_token') {
          // logout if token has expired
          store.dispatch({ type: LOGOUT, payload: { _id: null }});
          store.dispatch(push('/login'));
        }
      })
  });
};

export default socketConnect;