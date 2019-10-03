import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
// import { signup, login, logout } from './util/session_api_util';
import { signup, login, logout } from './actions/session_actions';


document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');
  window.store = store;
  // window.signup = signup;
  // window.login = login;
  window.logout = logout;
  ReactDOM.render(<Root store={store}/>, root);
});
