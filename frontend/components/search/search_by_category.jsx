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
        const category = values.category;
        this.props.fetchSearchCategory(category).then(() => this.initMap());
    }

    componentDidUpdate(prevProps) {
        if (this.props.location.search !== prevProps.location.search) {
            const values = queryString.parse(this.props.location.search);
            const category = values.category;
            this.props.fetchSearchCategory(category).then(() => this.initMap());
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

        markers.map(marker => {
            let that = this;
            marker.addListener('mouseover', function() {
                // console.log(that.props.businesses[this.label - 1]);
                console.log(infowindow1);
                // console.log(infowindow(that.props.businesses[this.label - 1]));
                infowindow(that.props.businesses[this.label - 1]).open(map, marker);
                // infowindow1.open(map, marker);
            });

            marker.addListener('mouseout', function() {
                console.log("mouseout");
                console.log(infowindow1);
                // console.log(infowindow(that.props.businesses[this.label - 1]));
                // infowindow(that.props.businesses[this.label - 1]).close();
                infowindow1.close();
                // infowindow1.close();
            });
        });
        
        var contentString = (business) => `
            <div className="infowindow-main">
                <div>
                    <a href=/#/businesses/${business.id}>${business.name}</a> 
                    <p>${business.address}</p>
                </div>
                <img className='business-index-page-item-img' src=${business.photoUrls[0]} />
            </div>
        `;
        // <img className='business-index-page-item-img' src=${business.photoUrls[0]} />
        var infowindow = (business) => new google.maps.InfoWindow({
            content: contentString(business)
        });

        var infowindow1 = new google.maps.InfoWindow({
            content: "hello"
        });


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
                    
                    <div>
                        <div id="map" className=""></div>
                    </div>
                    
                </div>

                <Footer />
               
            </>
        )
    }
 
}

export default SearchBySearchBar;