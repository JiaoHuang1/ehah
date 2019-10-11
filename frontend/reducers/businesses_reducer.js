import { RECEIVE_SINGLE_BUSINESS, RECEIVE_ALL_BUSINESSES } from '../actions/business_action';
import { RECEIVE_SINGLE_COMMENT } from '../actions/comment_action';

const businessesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SINGLE_BUSINESS:
      // debugger
      return Object.assign({}, state, action.business);
    case RECEIVE_SINGLE_COMMENT:
      return Object.assign({}, state, {[action.business.id]: action.business})
    case RECEIVE_ALL_BUSINESSES:
      return Object.assign({}, action.businesses)
    default:
      return state;
  }
};

export default businessesReducer;