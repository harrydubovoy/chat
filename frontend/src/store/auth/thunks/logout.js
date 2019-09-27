import { push } from 'react-router-redux';
import { batch } from 'react-redux';

import { setToken } from '../../../utils';
import { emitEvent } from '../../../utils/event';

import {
  LOGOUT,
} from '../../types';

const logout = () => (dispatch) => {
  setToken('');
  emitEvent('logout');
  batch(() => {
    dispatch({type: LOGOUT, payload: { _id: null }});
    dispatch(push('/login'));
  });
};

export default logout;