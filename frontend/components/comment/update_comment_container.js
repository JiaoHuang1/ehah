import { connect } from 'react-redux';
import UpdateCommentForm from './update_comment_form';
import { fetchSingleComment } from '../../actions/comment_action';
// import { fetchSingleBusiness } from '../../actions/business_action';
import { updateComment } from '../../actions/ui_action';

const mapStateToProps = (state, ownProps) => {
  return {
      
    comment: state.entities.comments[ownProps.match.params.commentId] || { id: null, rating: null, body: "", business: {id: null, name: ""}},
    updateButton: state.ui.updateButton || "Update Review"
    };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSingleComment: (id) => dispatch(fetchSingleComment(id)),
    // fetchSingleBusiness: (id) => dispatch(fetchSingleBusiness),
    updateComment: (id, comment) => dispatch(updateComment(id, comment)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateCommentForm);

