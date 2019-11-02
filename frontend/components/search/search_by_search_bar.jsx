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
        var labels = Array.from({length: this.props.businesses.length}, (v,k) => k + 1).join("");
        var labelIndex = 0;

        let firstMarker = { lat: this.props.businesses[0].latitude, lng: this.props.businesses[0].longitude };
        let map = new google.maps.Map(
            document.getElementById('map'), { zoom: 11, center: firstMarker }
        );
        let markers = this.props.businesses.map( business => {
            return new google.maps.Marker({ 
                position: { lat: business.latitude, lng: business.longitude }, 
                animation: google.maps.Animation.DROP,
                label: labels[labelIndex++ % labels.length], 
                map: map 
            });
        })

        var contentString = (business) => `<a href=/#/businesses/${business.id}>${business.name}</a>`;

        var infowindow = (business) => new google.maps.InfoWindow({
            content: contentString(business)
        });

        var infowindow2 = new google.maps.InfoWindow({
            content: "<p>hello</p>"
        });

        var infowindow3 = (business) => new google.maps.InfoWindow.setContent(contentString(business));

        markers.map(marker => {
            let that = this;
            marker.addListener('mouseover', function() {
                // console.log("open")
                // console.log(infowindow(that.props.businesses[this.label - 1]))
                // infowindow(that.props.businesses[this.label - 1]).open(map, marker)
                infowindow2.open(map, marker);
                // infowindow3(that.props.businesses[this.label - 1]).open(map, marker)
            });

            marker.addListener('mouseout', function() {
                // console.log("close")
                // console.log(infowindow(that.props.businesses[this.label - 1]))
                // infowindow(that.props.businesses[this.label - 1]).close();
                infowindow2.close();
                // infowindow3(that.props.businesses[this.label - 1]).close();
            });
        });
        
    }


    render() {
        let businessItem;
        let descriptionModal;
        {if (this.props.businesses !== undefined) {
            // businessItem = this.props.businesses.map((business, idx) => <BusinessIndexItem idx={idx + 1} business={business} key={business.id} /> )           
            businessItem = this.props.businesses.map((business, idx) => <BusinessIndexItem idx={idx + 1} business={business} categories={this.props.categories} key={business.id} /> )
        }}

        return(
            <div id="search-main">
                <NavBarSearchContainer />
                <CategoryNavBar />
                <div className="business-index-page-main-and-aside">
                    <ul>
                        {businessItem}
                    </ul>
                    <div>
                        <div id="map"></div>
                    </div>
                </div>

                <Footer /> 
            </div>
        )
    }
 
}

export default SearchBySearchBar;