import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
// import { signup, login, logout } from './util/session_api_util';
// import { signup, login, logout } from './actions/session_actions';
// import { fetchSingleBusiness } from './util/business_api_util';
// import { fetchSingleBusiness } from './actions/business_action';
// import { fetchAllCategories } from './util/category_api_util';
// import { fetchAllCategories } from './actions/category_action';
// import { fetchAllBusinesses } from './util/business_api_util';
import { fetchAllBusinesses } from './actions/business_action';

document.addEventListener('DOMContentLoaded', () => {
  
  const root = document.getElementById('root');

  let store;
  if (window.currentUser) {
  const preloadedState = {
    entities: {
      users: { [window.currentUser.id]: window.currentUser }
    },
    session: { id: window.currentUser.id }
  };
  store = configureStore(preloadedState);
  delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.store = store;
  window.fetchAllBusinesses = fetchAllBusinesses;
  // window.fetchAllCategories = fetchAllCategories;

  ReactDOM.render(<Root store={store}/>, root);
});
