import {
    RECEIVE_SESSION_ERRORS,
    RECEIVE_CURRENT_USER,
    CLEAR_ERROR,
  } from '../actions/session_actions';
  
  export default (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
      case RECEIVE_SESSION_ERRORS:
        return action.errors;
      case RECEIVE_CURRENT_USER:
        return [];
      //for error message goes to another page
      case CLEAR_ERROR:
        return [];
      // code finishes
      default:
        return state;
    }
  };