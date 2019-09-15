import { push } from 'react-router-redux';
import axios from 'axios';
import { batch } from 'react-redux';

import { onError } from '../../../utils/event';

import {
  REGISTER,
} from '../../types';

export const register = (user) => (dispatch) => {
  axios.post('/register', { user })
    .then((response) => {
      batch(() => {
        dispatch({type: REGISTER, payload: user});
        dispatch(push('/login'));
      });
    })
    .catch((error) => {
      onError(error)
    });
};

export default register;