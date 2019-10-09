import React from 'react';
import BusinessIndexItem from './business_index_item';
import NavBarSearch from '../nav_bar/nav_bar_search';
import Footer from '../contact_footer/footer';

class BusinessIndex extends React.Component {
    constructor(props) {
      super(props);
      // debugger
    }
  
    componentDidMount() {
      this.props.fetchAllBusinesses();
    }
  
    render() {
        let businessItem;
        {if (this.props.businesses !== undefined) {
            businessItem = this.props.businesses.map((business, idx) => <BusinessIndexItem idx={idx + 1} business={business} key={business.id} /> )           
        }}

        return(
            <>
                <NavBarSearch />
                <div className="business-index-page-main-and-aside">
                    <ul>
                        {businessItem}
    
                    </ul>

                    <aside>google map</aside>
                </div>

                <Footer />
               
            </>
        )
    }
}

export default BusinessIndex;