import React from 'react';
import { Route, Link } from 'react-router-dom';
import SignUpFormContainer from '../components/session_form/signup_form_container';
import LogInFormContainer from '../components/session_form/login_form_container';
import splash from './splash/splash';


const App = () => (
  <div>
    {/* <Link to="/login">Log In</Link>
    <Link to="/signup">Sign Up</Link> */}
    <Route exact path="/" component={splash}/>
    <Route exact path="/login" component={LogInFormContainer} />
    <Route exact path="/signup" component={SignUpFormContainer} />   
  </div>
);

export default App;