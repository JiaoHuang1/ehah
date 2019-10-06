import { combineReducers } from 'redux';

import users from './users_reducer';
import businesses from './businesses_reducer';
import categories from './categories_reducer';

export default combineReducers({
  users,
  businesses,
  categories,
});