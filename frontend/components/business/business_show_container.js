import { connect } from 'react-redux';
import { fetchSingleBusiness } from '../../actions/business_action';
// import { fetchSingleCategory } from '../../actions/category_action';
import { fetchAllCategories } from '../../actions/category_action';
import BusinessShow from './business_show';

const mapStateToProps = (state, ownProps) => {
    // debugger
  return {
    business: state.entities.businesses[ownProps.match.params.businessId] || {},
    // categories: Object.values(state.entities.categories) || {}
    categories: state.entities.categories,
  };
};

const mapDispatchToProps = dispatch => {
  // debugger
  return {
    fetchSingleBusiness: (id) => dispatch(fetchSingleBusiness(id)),
    // fetchSingleCategory: (id) => dispatch(fetchSingleCategory(id)),
    // fetchAllCategories: () => dispatch(fetchAllCategories()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BusinessShow);