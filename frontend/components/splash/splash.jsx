import React from 'react';
import NavBar from '../nav_bar/nav_bar_container';
import Footer from '../contact_footer/footer';
// import NavBarSearch from '../nav_bar/nav_bar_search';
import SearchFrom from '../nav_bar/search_form';
import { Link } from 'react-router-dom';


const Splash = () => {
    return (
        <>
            <div className="splash">
                <NavBar />
                <img className="splash-logo" src={window.splashLogoURL} />
                {/* <NavBarSearch />  */}
                <div><SearchFrom /></div>
            </div>

            <div className="splash-page-category-section">
                <Link className="splash-page-category-link" to='/search/categories?category=Restaurant'>
                    <img className="splash-page-category-img" src="https://ehah-seed.s3.amazonaws.com/splash_category/restaurant.jpg" alt=""/>
                    Restaurant
                </Link>
                <Link className="splash-page-category-link" to='/search/categories?category=Home Service'>
                    <img className="splash-page-category-img" src="https://ehah-seed.s3.amazonaws.com/splash_category/home_service.png" alt=""/>
                    Home Service
                </Link>
                <Link className="splash-page-category-link" to='/search/categories?category=Auto Service'>
                    <img className="splash-page-category-img" src="https://ehah-seed.s3.amazonaws.com/splash_category/auto_service.jpg" alt=""/>
                    Auto Service
                </Link>
                <Link className="splash-page-category-link" to='/search/categories?category=Hotel'>
                    <img className="splash-page-category-img" src="https://ehah-seed.s3.amazonaws.com/splash_category/hotel.jpg" alt=""/>
                    Hotel
                </Link>
            </div>

            <Footer />
        </>
    )
}

export default Splash;