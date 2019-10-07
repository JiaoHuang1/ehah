import { connect } from 'react-redux';
import { fetchAllBusinesses } from '../../actions/business_action';
import { fetchAllCategories } from '../../actions/category_action';
import BusinessIndex from './business_index';

const mapStateToProps = (state, ownProps) => {
    // debugger
  return {
    businesses: Object.values(state.entities.businesses),
    categories: state.entities.categories,
    // category_name: ownProps.match.params.category_name,
  };
};

const mapDispatchToProps = dispatch => {
  // debugger
  return {
    fetchAllBusinesses: () => dispatch(fetchAllBusinesses()),
    fetchAllCategories: () => dispatch(fetchAllCategories()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BusinessIndex);