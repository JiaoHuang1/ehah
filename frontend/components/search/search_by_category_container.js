import { connect } from 'react-redux';
import { fetchAllCategories } from '../../actions/category_action';
import { fetchSearchCategory} from '../../actions/business_action'
import SearchByCategory from './search_by_category';

const mapStateToProps = (state) => {
  return {
    businesses: Object.values(state.entities.businesses),
    categories: state.entities.categories,
  };
};

const mapDispatchToProps = dispatch => ({
    fetchSearchCategory: (category) => dispatch(fetchSearchCategory(category)),
    fetchAllCategories: () => dispatch(fetchAllCategories()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchByCategory);