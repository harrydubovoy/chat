import { onEvent } from "../utils/event";
import { Notification } from '../components/Notification';

const error = () => {

  onEvent('error', ({ message }) => {
    Notification(message, 'error');
    console.error(message);
  });

};

export default error;