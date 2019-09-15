import { createSelector } from 'reselect';

export const selectRoom = createSelector(
  (state) => state,
  (state) => {
    const { current, list } = state.rooms;
    if (current && list[current]) {
      return list[current]
    }
    return [];
  }
);

export const selectCurrentRoom = createSelector(
  (state) => state,
  (state) => state.rooms.current
);