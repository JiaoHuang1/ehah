import React from 'react';
import { Link } from 'react-router-dom';
import SearchForm from './search_form';

class NavBarSearch extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        let sessionLinks;


        if (this.props.currentUser !== undefined) {
          sessionLinks = (
            <hgroup className="navbar-search-session">
                <h2>Hi, {this.props.currentUser.first_name}!</h2>
                <button className="navbar-search-login-signup-logout" onClick={this.props.logout}>Log Out</button>
            </hgroup>
        );
        } else {
          sessionLinks = (
            <nav className="navbar-search-session">
              <Link className="navbar-search-login-signup-logout" to="/login">Log In</Link>
              <Link className="navbar-search-login-signup-logout" to="/signup">Sign Up</Link>  
            </nav>
        );
        }

        return (
          <div className="navbar-search-main">
            <Link to="/">
              <img className="signup-login-page-logo" src={window.splashLogoURL} />
            </Link>
            <div className="navbar-search-form-wrapper"><SearchForm /></div>
            { sessionLinks }
          </div>
        )

    }
}


export default NavBarSearch