import { RECEIVE_SINGLE_CATEGORY, RECEIVE_ALL_CATEGORIES } from '../actions/category_action';
import { RECEIVE_SINGLE_BUSINESS } from '../actions/business_action';

const categoriesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SINGLE_BUSINESS:
      return Object.assign({}, state, action.categories);
    case RECEIVE_SINGLE_CATEGORY:
      // return Object.assign({}, state, { [action.category.id]: action.category });
      return Object.assign({}, { [action.category.id]: action.category });
    case RECEIVE_ALL_CATEGORIES:
      return Object.assign({}, action.categories)
    default:
      return state;
  }
};

export default categoriesReducer;