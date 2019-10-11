import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_SINGLE_BUSINESS } from "../actions/business_action";

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SINGLE_BUSINESS:
      return Object.assign({}, state, action.users);
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
    default:
      return state;
  }
};

export default usersReducer;