import React from 'react';
import { Link } from 'react-router-dom';



const Footer = () => {
  return (
    <footer className="footer-main">
      
      <p>Contact me</p>
      
      <div className="contact-logo-group">
        <a href="https://www.linkedin.com/in/jiao-huang/">
          <img className="footer-contact-logo" src={window.linkedinLogo}/> 
        </a>
        <a href="https://github.com/JiaoHuang1">
          <img className="footer-contact-logo" src={window.githubLogo}/>
        </a>
        <a href="http://www.jiaohuang1.com/">
          <img className="footer-contact-logo" src={window.portfolioIcon}/>
        </a>
        <a href="http://www.jiaohuang1.com/manhattan_housing/">
          <img className="footer-contact-logo" src={window.manhattanHousingIcon}/>
        </a>
        <a href="https://angel.co/jiao-huang">
          <img className="footer-contact-logo" src={window.angellistLogo}/>
        </a>
        {/* <Link to="/contact">
          <img className="footer-contact-logo" src={window.phoneLogo}/>
        </Link> */}
      </div>  

      <img className="footer-img" src={window.footerImg}/>

    </footer>
  )
};


export default Footer;


