import React from 'react';
import NavBar from '../nav_bar/nav_bar_container';
import Footer from '../contact_footer/footer';
// import NavBarSearch from '../nav_bar/nav_bar_search';
import SearchFrom from '../nav_bar/search_form';


const Splash = () => {
    return (
        <>
            <div className="splash">
                <NavBar />
                <img className="splash-logo" src={window.splashLogoURL} />
                {/* <NavBarSearch />  */}
                <div><SearchFrom /></div>
                
            </div>
            <Footer />
        </>
    )
}

export default Splash;