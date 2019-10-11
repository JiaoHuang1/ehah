import { connect } from 'react-redux';
import { fetchAllBusinesses, fetchSingleBusiness } from '../../actions/business_action';
import { fetchAllCategories } from '../../actions/category_action';
import BusinessIndex from './business_index';

const mapStateToProps = (state, ownProps) => {
    // //debugger
  return {
    businesses: Object.values(state.entities.businesses),
    categories: state.entities.categories,
  };
};

const mapDispatchToProps = dispatch => {
  // //debugger
  return {
    fetchAllBusinesses: () => dispatch(fetchAllBusinesses()),
    fetchSingleBusiness: (id) => dispatch(fetchSingleBusiness(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BusinessIndex);