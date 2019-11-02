import {
    RECEIVE_COMMENT_ERRORS, 
    CLEAR_COMMENT_ERROR,
  } from '../actions/comment_action';
  
  export default (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_COMMENT_ERRORS:
            return action.errors;
        case CLEAR_COMMENT_ERROR:
            return [];
        default:
            return state;
    }
  };