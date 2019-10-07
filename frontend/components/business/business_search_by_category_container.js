import { connect } from 'react-redux';
import { fetchAllBusinesses } from '../../actions/business_action';
import { fetchAllCategories } from '../../actions/category_action';
import BusinessSearchByCategoryIndex from './business_search_by_category_index';

const mapStateToProps = (state, ownProps) => {
    // debugger
  return {
    businesses: state.entities.businesses,
    categories: Object.values(state.entities.categories),
    category_name: ownProps.match.params.category_name,
  };
};

const mapDispatchToProps = dispatch => {
  // debugger
  return {
    fetchAllBusinesses: () => dispatch(fetchAllBusinesses()),
    fetchAllCategories: () => dispatch(fetchAllCategories()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BusinessSearchByCategoryIndex);