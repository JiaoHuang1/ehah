import React from 'react';
import NavBar from '../nav_bar/nav_bar_container';
import Footer from '../contact_footer/footer';

const Splash = () => {
    return (
        <>
            <div className="splash">
                <NavBar />
                <img className="splash-logo" src={window.splashLogoURL} />  
            </div>
            <Footer />
        </>
    )
}

export default Splash;