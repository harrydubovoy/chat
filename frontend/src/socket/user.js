import { push } from "react-router-redux";
import { onEvent, emitEvent } from "../utils/event";
import { Notification } from '../components/Notification';

import {
  SET_CURRENT_USER,
  STATUS_USER,
  PROFILE_INIT, UPDATE_PROFILE,
} from "../store/types";


const user = (store) => {

  // set current user after login
  onEvent('user:set', (auth, profile) => {
    // join user to global room
    emitEvent('join::user', auth._id);

    // set current user for auth
    store.dispatch({ type: SET_CURRENT_USER, payload: auth });
    // set data to profile
    store.dispatch({type: PROFILE_INIT, payload: profile});
    // redirect to main page
    store.dispatch(push('/im'));
  });

  // status online/offline
  onEvent('user::status:set', (user) => {
    store.dispatch({ type: STATUS_USER, payload: user });
  });

  // profile update
  onEvent('profile::update:set', (data) => {
    Notification('Profile updated', 'success');
    store.dispatch({ type: UPDATE_PROFILE, payload: data});
  });

};

export default user