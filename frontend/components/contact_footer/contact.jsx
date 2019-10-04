import React from 'react';
import NavBar from '../nav_bar/nav_bar_container';
import { Link } from 'react-router-dom';



const Contact = () => {
  return ( 
    <>
    <header className="navbar">
      <Link to="/">
        <img className="signup-login-page-logo" src={window.splashLogoURL} />
      </Link>
    </header>
    <div className='contact-main'>
      
      <NavBar />
      <h1>Contact Me</h1>
      <p>Email: jiaohuang2013@gmail.com</p>
      <p>Phone: 201-744-0426</p>
    </div>
    </>
  )
};


export default Contact;