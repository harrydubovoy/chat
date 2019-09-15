import { onEvent, emitEvent } from "../utils/event";

// Action types
import {
  SET_ALL_USERS,
  UPDATE_USERS,
} from "../store/types";

const users = (store) => {
  // get users from db
  emitEvent('users::get');
  // set all user to store
  onEvent('users::set', (users) => {
    store.dispatch({ type: SET_ALL_USERS, payload: users });
  });

  // update users list when new user registered
  onEvent('users::added:set', (user) => {
    emitEvent('users::added:get', user);
  });

  onEvent('users::update:set', (user) => {
    store.dispatch({ type: UPDATE_USERS, payload: user });
  });

};

export default users