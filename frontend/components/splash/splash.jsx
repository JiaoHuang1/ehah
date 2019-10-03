import React from 'react';
import NavBar from '../nav_bar/nav_bar_container';

const Splash = () => {
    return (
        <div className="splash">
            <NavBar />
            <img className="splash-logo" src={window.splashLogoURL} />  
        </div>
    )
}

export default Splash;