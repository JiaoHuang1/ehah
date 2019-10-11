import React from 'react';
import queryString from 'query-string';
import BusinessIndexItem from '../business/business_index_item';
import NavBarSearchContainer from '../nav_bar/nav_bar_search_container';
import CategoryNavBar from '../nav_bar/category_nav_bar';
import Footer from '../contact_footer/footer';

class SearchBySearchBar extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const values = queryString.parse(this.props.location.search);
        const find = values.find;
        const loc = values.loc;
        this.props.fetchSearchBarBusiness(find, loc).then(() => this.initMap());
    }

    componentDidUpdate(prevProps) {
        if (this.props.location.search !== prevProps.location.search) {
            const values = queryString.parse(this.props.location.search);
            const find = values.find;
            const loc = values.loc;
            this.props.fetchSearchBarBusiness(find, loc).then(() => this.initMap());
        }
    }

    initMap() {
        let firstMarker = { lat: this.props.businesses[0].latitude, lng: this.props.businesses[0].longitude };
        let map = new google.maps.Map(
            document.getElementById('map'), { zoom: 11, center: firstMarker }
        );
        let markers = this.props.businesses.map( business => {
            return new google.maps.Marker({ position: { lat: business.latitude, lng: business.longitude }, map: map });
        })
    }


    render() {
        let businessItem;
        {if (this.props.businesses !== undefined) {
            // businessItem = this.props.businesses.map((business, idx) => <BusinessIndexItem idx={idx + 1} business={business} key={business.id} /> )           
            businessItem = this.props.businesses.map((business, idx) => <BusinessIndexItem idx={idx + 1} business={business} categories={this.props.categories} key={business.id} /> )
        }}

        return(
            <>
                <NavBarSearchContainer />
                <CategoryNavBar />
                <div className="business-index-page-main-and-aside">
                    <ul>
                        {businessItem}
                    </ul>

                    <div id="map"></div>
                </div>

                <Footer />
               
            </>
        )
    }
 
}

export default SearchBySearchBar;