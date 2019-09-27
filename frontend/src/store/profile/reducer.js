import { handleActions } from 'redux-actions';

// Action types
import {
  PROFILE_INIT,
  UPLOAD_IMAGE,
  UPDATE_PROFILE,
} from '../types';

const initialState = {
  imageLoading: false,
  username: '',
  image: '',
  firstName: '',
  lastName: '',
  phone: '',
  country: '',
};


const uploadImage = (state, { payload: { imageLoading, image }}) => ({
  ...state,
  imageLoading,
  image,
});

const setProfile = (state, { payload }) => ({
  ...state,
  ...payload,
});

export default handleActions({
  [PROFILE_INIT]: setProfile,
  [UPLOAD_IMAGE]: uploadImage,
  [UPDATE_PROFILE]: setProfile,
}, initialState);