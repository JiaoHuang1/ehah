import { connect } from 'react-redux';
import { fetchSingleBusiness, deleteComment } from '../../actions/business_action';
import { fetchAllCategories } from '../../actions/category_action';
import BusinessShow from './business_show';

const mapStateToProps = (state, ownProps) => {
  return {
    business: state.entities.businesses[ownProps.match.params.businessId] || {},
    currentUserId: state.session.id,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteComment: (id) => dispatch(deleteComment(id)),
    fetchSingleBusiness: (id) => dispatch(fetchSingleBusiness(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BusinessShow);