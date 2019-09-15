import http from "../../../utils/http";
import { emitEvent } from "../../../utils/event";
import { Notification } from "../../../components/notification";

import {
  UPLOAD_IMAGE
} from "../../types";


const deleteImage = () => (dispatch, getState) => {
  const { profile: { image }} = getState();
  dispatch({ type: UPLOAD_IMAGE, payload: { imageLoading: true, image}});

  http.delete('/profile/remove-image', { params: { image }})
    .then(({ data }) => {

      emitEvent('profile::update:get', { image: '' });
      dispatch({ type: UPLOAD_IMAGE, payload: { imageLoading: false, image: ''}});
    })
    .catch((error) => {
      console.error('Image delete error: ', error);
      Notification('Image not deleted!', 'error');
    })
};

export default deleteImage;