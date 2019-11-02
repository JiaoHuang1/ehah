import { connect } from 'react-redux';
import CreateCommentForm from './create_comment_form';
import { fetchSingleBusiness } from '../../actions/business_action';
import { createComment, clearCommentError } from '../../actions/comment_action';

const mapStateToProps = (state, ownProps) => {
  return {
      business: state.entities.businesses[ownProps.match.params.businessId] || { id: null, name: ""},
      errors: state.errors.comment,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchSingleBusiness: (id) => dispatch(fetchSingleBusiness(id)),
        createComment: (business_id, comment) => dispatch(createComment(business_id, comment)),
        clearCommentError: () => dispatch(clearCommentError()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateCommentForm);