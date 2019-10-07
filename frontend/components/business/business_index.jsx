import React from 'react';
import BusinessIndexItem from './business_index_item';
import NavBarSearch from '../nav_bar/nav_bar_search_container';
import Footer from '../contact_footer/footer'

class BusinessIndex extends React.Component {
    constructor(props) {
      super(props);
      // debugger
    }
  
    componentDidMount() {
  
      this.props.fetchAllBusinesses();
      this.props.fetchAllCategories();
    }
  
  
    render() {
        return(
            <>
                <NavBarSearch />
                <div className="business-index-page-main-and-aside">
                    <ul>
        
                        {this.props.businesses.map (
                            (business, idx) => {
                                return (
                                    <BusinessIndexItem idx={idx + 1} business={business} categories={this.props.categories} key={business.id} />    
                                )
                            }
                            
                        )}
    
                    </ul>

                    <aside>google map</aside>
                </div>

                <Footer />
               
            </>
        )
    }
}

export default BusinessIndex;