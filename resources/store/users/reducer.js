import { handleActions } from "redux-actions";

// Action types
import {
  SET_ALL_USERS,
  STATUS_USER,
  UPDATE_USERS,
} from '../types';

const initialState = {};

const setAllUsers = (state, { payload }) => payload;

const setStatusUser = (state, { payload: { _id, isOnline }}) => {
  console.log(_id);
  return {
    ...state,
    [_id]: {
      ...state[_id],
      isOnline,
    }
  }
};

const updateUsers = (state, { payload }) => ({
  ...state,
  ...payload
});

export default handleActions({
  [SET_ALL_USERS]: setAllUsers,
  [STATUS_USER]: setStatusUser,
  [UPDATE_USERS]: updateUsers,
}, initialState);