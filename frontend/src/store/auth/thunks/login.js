import { push } from 'react-router-redux';
import axios from 'axios';
import { batch } from 'react-redux';

import { setToken } from '../../../utils';
import { emitEvent, onError } from '../../../utils/event';


import {
  LOGIN,
} from '../../types';

const login = (data) => (dispatch) => {
  axios.post('/login', data)
    .then(({ data }) => {
      const { token, _id } = data;

      setToken(token);

      emitEvent('authenticate', { token });
      emitEvent('login');

      batch(() => {
        dispatch({type: LOGIN, payload: { _id }});
        dispatch(push('/im'));
      });
    })
    .catch((error) => {
      onError(error);
    });
};

export default login