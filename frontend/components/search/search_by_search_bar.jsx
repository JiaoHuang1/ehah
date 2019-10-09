import React from 'react';
import queryString from 'query-string';
import BusinessIndexItem from '../business/business_index_item';
import NavBarSearch from '../nav_bar/nav_bar_search';
import Footer from '../contact_footer/footer';

class SearchBySearchBar extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const values = queryString.parse(this.props.location.search);
        const find = values.find;
        const loc = values.loc;
        this.props.fetchSearchBarBusiness(find, loc)
    }

    componentDidUpdate(prevProps) {
        if (this.props.location.search !== prevProps.location.search) {
            const values = queryString.parse(this.props.location.search);
            const find = values.find;
            const loc = values.loc;
            this.props.fetchSearchBarBusiness(find, loc)
        }
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

export default SearchBySearchBar;