import React from 'react';
import { Link } from 'react-router-dom';
import SearchForm from './search_form';



const NavBarSearch = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="navbar-search-main">
        <SearchForm />
        <Link className="navbar-search-login-signup-logout" to="/login">Log In</Link>
        <Link className="navbar-search-login-signup-logout" to="/signup">Sign Up</Link>  
    </nav>
  );
  const personalGreeting = () => (
    <hgroup className="navbar-search-main">
        <SearchForm />
        <h2 className="">Hi, {currentUser.first_name}!</h2>
        <button className="navbar-search-login-signup-logout" onClick={logout}>Log Out</button>
    </hgroup>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};

// class NavBarSearch extends React.Component {
//     constructor(props) {
//         super(props);
//     }

//     render() {
//         const sessionLinks = () => (
//             <nav className="navbar-search-login-signup">
//               <Link className="navbar-search-log-in-button" to="/login">Log In</Link>
//               <Link className="navbar-search-sign-up-button" to="/signup">Sign Up</Link>  
//             </nav>
//         );

//         const personalGreeting = () => (
//             <hgroup className="navbar-search-header-group">
//                 <h2 className="navbar-search-header-name">Hi, {currentUser.first_name}!</h2>
//                 <button className="navbar-search-header-button" onClick={this.props.logout}>Log Out</button>
//             </hgroup>
//         );

//         let session_buttons;

//         if (this.props.currentUser !== undefined) {
//             session_buttons = personalGreeting();
//         } else {
//             session_buttons = sessionLinks();
//         }

//         return (
//             { session_buttons }
//         )

//     }
// }


export default NavBarSearch