import React from 'react';
import BusinessIndexItem from './business_index_item';

class BusinessSearchByCategoryIndex extends React.Component {
    constructor(props) {
      super(props);
      // debugger
    }
  
    componentDidMount() {
  
      this.props.fetchAllBusinesses();
      this.props.fetchAllCategories();
    }
  
  
    render() {
        let business_id;
        {this.props.categories.map(category => {
            if (category.category_name === this.props.category_name) {
                return business_id = category.business_id
            }
        })}

        console.log(business_id);

        let main_component;
        if (business_id !== undefined && this.props.businesses !== undefined) {
            // debugger
            main_component = this.props.business_id.map((id, idx) => <BusinessIndexItem idx={idx + 1} business={this.props.businesses[id]} categories={this.props.categories} key={id} /> )
        }

        return(
            <>
  
                <p>category_name: {this.props.category_name}</p>
                {main_component}

            </>
        )
    }
}

export default BusinessSearchByCategoryIndex;