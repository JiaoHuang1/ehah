import { SUCCESSFUL_UPDATE_COMMENT } from '../actions/ui_action';

const uiReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case SUCCESSFUL_UPDATE_COMMENT:
      return action.updateButton;
    default:
      return state;
  }
};

export default uiReducer;