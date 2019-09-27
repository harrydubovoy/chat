import { combineReducers } from 'redux';

import { auth } from './auth';
import { users } from './users';
import { rooms } from './rooms';
import { messages } from './messages';
import { profile } from './profile';

console.log('reducer auth', auth);
console.log('reducer users', users);
console.log('reducer rooms', rooms);
console.log('reducer messages', messages);
console.log('reducer profile', profile);

export default combineReducers({
  auth,
  users,
  rooms,
  messages,
  profile,
})