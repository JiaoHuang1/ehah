import React from 'react';
import { Link } from 'react-router-dom';

const SearchForm = () => (
    <>
        <Link to="/">
            <img className="signup-login-page-logo" src={window.splashLogoURL} />
        </Link>
        <form className="search-bar-search-form">
                <div className="search-bar-label-input">
                    <label>Find</label>
                    <input type="text" placeholder="Restaurants"/>
                </div>

                <div className="search-bar-label-input">
                    <label>Near</label>
                    <input type="text" placeholder="New York, NY"/>
                </div>

            <button><img className="search-bar-search-img" className="" src={window.searchIcon} /></button>

        </form>
    </>
)

export default SearchForm;