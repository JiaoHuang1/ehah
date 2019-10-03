import React from 'react';
import { Link } from 'react-router-dom';



const NavBar = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <Link className="log-in-button" to="/login">Log In</Link>
      <Link className="sign-up-button" to="/signup">Sign Up</Link>  
    </nav>
  );
  const personalGreeting = () => (
    <hgroup className="header-group">
        <h2 className="header-name">Hi, {currentUser.first_name}!</h2>
        <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default NavBar;