import { handleActions } from 'redux-actions';

// Action types
import {
  LOGIN,
  LOGOUT,
  REGISTER,
  SET_CURRENT_USER,
} from '../types'

const initialState = {
  _id: null
};

const defaultHandler = (state, { payload }) => ({
  ...state,
  ...payload
});

export default handleActions({
  [LOGIN]: defaultHandler,
  [LOGOUT]: defaultHandler,
  [REGISTER]: defaultHandler,
  [SET_CURRENT_USER]: defaultHandler,
}, initialState);