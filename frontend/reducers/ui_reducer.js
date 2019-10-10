import { SUCCESSFUL_UPDATE_COMMENT, SUCCESSFUL_CREATE_COMMENT } from '../actions/ui_action';

const uiReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case SUCCESSFUL_UPDATE_COMMENT:
      return action.updateButton;
    case SUCCESSFUL_CREATE_COMMENT:
      return action.createButton;
    default:
      return state;
  }
};

export default uiReducer;