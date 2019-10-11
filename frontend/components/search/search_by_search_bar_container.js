import { connect } from 'react-redux';
import { fetchAllCategories } from '../../actions/category_action';
import { fetchSearchBarBusiness } from '../../actions/business_action'
import SearchBySearchBar from './search_by_search_bar';

const mapStateToProps = (state) => {
  return {
    // businesses: Object.values(state.entities.businesses),
    businesses: Object.values(state.entities.businesses),
    categories: state.entities.categories,
  };
};

const mapDispatchToProps = dispatch => ({
    fetchSearchBarBusiness: (find = "", loc = "") => dispatch(fetchSearchBarBusiness(find, loc)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBySearchBar);