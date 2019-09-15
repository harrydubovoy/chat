import { onEvent } from "../utils/event";
import { Notification } from '../components/notification';

const error = () => {

  onEvent('error', ({ message }) => {
    Notification(message, 'error');
    console.error(message);
  });

};

export default error;