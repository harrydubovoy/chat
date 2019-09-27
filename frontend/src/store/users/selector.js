import { createSelector } from 'reselect';

export const selectUsers = createSelector(
  (state) => state,
  (state) => {
    const { users } = state;
    const usersId = Object.keys(users);

    if(usersId.length) {
      return usersId.map(function(id) {
        return users[id];
      });
    }

    return [];
  }
);