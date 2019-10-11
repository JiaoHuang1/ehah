import { RECEIVE_SINGLE_COMMENT, DELETE_COMMENT } from '../actions/comment_action';
import { RECEIVE_SINGLE_BUSINESS } from '../actions/business_action';

const commentsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  let business
  switch(action.type) {
    case RECEIVE_SINGLE_BUSINESS:
      //debugger
      return Object.assign({}, state, action.comments);
    case RECEIVE_SINGLE_COMMENT:
      return Object.assign({}, state, {[action.comment.id]: action.comment})
    case DELETE_COMMENT:
      newState = Object.assign({}, state);
      return newState;
    default:
      return state;
  }
};

export default commentsReducer;