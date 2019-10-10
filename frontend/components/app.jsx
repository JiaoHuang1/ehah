import React from 'react';
import { Route, Link } from 'react-router-dom';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import BusinessShowContainer from './business/business_show_container';
import BusinessIndexContainer from './business/business_index_container';
import SearchBySearchBarContainer from './search/search_by_search_bar_container';
import SearchByCategoryContainer from './search/search_by_category_container';
import updateCommentContainer from './comment/update_comment_container';
import createCommentContainer from './comment/create_comment_container';
// import BusinessSearchByCategoryContainer from './business/business_search_by_category_container';
import Contact from './contact_footer/contact';
import splash from './splash/splash';


const App = () => (
  <div>
    <Route exact path="/" component={splash}/>
    <Route exact path="/login" component={LogInFormContainer} />
    <Route exact path="/signup" component={SignUpFormContainer} />
    <Route exect path="/contact" component={Contact} />
    <Route exact path="/businesses" component={BusinessIndexContainer} />
    <Route exact path="/businesses/:businessId" component={BusinessShowContainer} />
    <Route exact path="/search/businesses" component={SearchBySearchBarContainer} />
    <Route exact path="/search/categories" component={SearchByCategoryContainer} />
    <Route exact path="/comments/:commentId" component={updateCommentContainer} />
    <Route exact path="/businesses/:businessId/newcomment" component={createCommentContainer} />
    
  </div>
);

export default App;