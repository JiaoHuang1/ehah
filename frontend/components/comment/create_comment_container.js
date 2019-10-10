import { connect } from 'react-redux';
import CreateCommentForm from './create_comment_form';
// import { fetchSingleComment } from '../../actions/comment_action';
import { fetchSingleBusiness } from '../../actions/business_action';
import { createComment } from '../../actions/ui_action';

const mapStateToProps = (state, ownProps) => {
  return {
      business: state.entities.businesses[ownProps.match.params.businessId] || { id: null, name: ""},
      createButton: state.ui.createButton || "Post Review"
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchSingleBusiness: (id) => dispatch(fetchSingleBusiness(id)),
        createComment: (business_id, comment) => dispatch(createComment(business_id, comment)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateCommentForm);