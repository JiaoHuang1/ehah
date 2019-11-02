import {
    RECEIVE_COMMENT_ERRORS
  } from '../actions/comment_action';
  
  export default (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
      case RECEIVE_COMMENT_ERRORS:
        return action.errors;
      default:
        return state;
    }
  };