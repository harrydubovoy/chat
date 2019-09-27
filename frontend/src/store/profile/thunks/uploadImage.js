import http from "../../../utils/http";
import {fileData} from "../../../utils";
import { emitEvent } from "../../../utils/event";
import { Notification } from "../../../components/Notification";

import { UPLOAD_IMAGE } from "../../types";

const uploadImage = (event) => (dispatch) => {
  dispatch({ type: UPLOAD_IMAGE, payload: { imageLoading: true, image: ''}});

  const imageData = fileData(event.target.files);

  http.post('/profile/upload-image', imageData)
    .then(({ data }) => {
      const image = data.image.originalname;

      emitEvent('profile::update:get', { image });
      dispatch({ type: UPLOAD_IMAGE, payload: { imageLoading: false, image}});
    })
    .catch((error) => {
      console.error('Image upload error: ', error);
      Notification('Image not uploaded!', 'error');
    });
};

export default uploadImage;