import { createSelector } from "reselect";


export const selectUnreadMessages = createSelector(
  (state) => state,
  (state) => state.messages.unreadMessages
);