import React from 'react';
import { Route, Link } from 'react-router-dom';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import BusinessShowContainer from './business/business_show_container';
import Contact from './contact_footer/contact';
import splash from './splash/splash';


const App = () => (
  <div>
    {/* <Link to="/login">Log In</Link>
    <Link to="/signup">Sign Up</Link> */}
    <Route exact path="/" component={splash}/>
    <Route exact path="/login" component={LogInFormContainer} />
    <Route exact path="/signup" component={SignUpFormContainer} />
    <Route exect path="/contact" component={Contact} />
    <Route exect path="/businesses/:businessId" component={BusinessShowContainer} />
  </div>
);

export default App;