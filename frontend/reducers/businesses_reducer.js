import { RECEIVE_SINGLE_BUSINESS } from '../actions/business_action';

const businessesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SINGLE_BUSINESS:
      return Object.assign({}, state, { [action.business.id]: action.business });
    default:
      return state;
  }
};

export default businessesReducer;