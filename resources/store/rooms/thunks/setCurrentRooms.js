import { emitEvent } from "../../../utils/event";
import { SET_CURRENT_ROOM } from "../../types";


const setCurrentRooms = (roomId) => (dispatch) => {
  dispatch({ type: SET_CURRENT_ROOM, payload: roomId });

  emitEvent('message::read:get', roomId);
};

export default setCurrentRooms;