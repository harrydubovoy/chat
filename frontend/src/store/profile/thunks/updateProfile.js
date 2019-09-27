import { emitEvent } from "../../../utils/event";


const updateProfile = (data) => () => {
  emitEvent('profile::update:get', data);
};

export default updateProfile;