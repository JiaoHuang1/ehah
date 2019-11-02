import { connect } from 'react-redux';
import UpdateCommentForm from './update_comment_form';
import { updateComment, fetchSingleComment } from '../../actions/comment_action';
// import { fetchSingleBusiness } from '../../actions/business_action';
// import { updateComment } from '../../actions/ui_action';
// import { updateComment } from '../../actions/comment_action';

const mapStateToProps = (state, ownProps) => {
  const commentId = ownProps.match.params.commentId;
  const comment = state.entities.comments[commentId];
  const errors = state.errors.comment;
  let business;
  if (comment) {
    business = state.entities.businesses[comment.business_id];
  }
  
  return {
    comment,
    business,
    errors,
    };
};
  // comment: state.entities.comments[ownProps.match.params.commentId] || { id: null, rating: null, body: "", business: {id: null, name: ""}},
    // updateButton: state.ui.updateButton || "Update Review"
const mapDispatchToProps = dispatch => {
  return {
    fetchSingleComment: (id) => dispatch(fetchSingleComment(id)),
    // fetchSingleBusiness: (id) => dispatch(fetchSingleBusiness),
    updateComment: (id, comment) => dispatch(updateComment(id, comment)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateCommentForm);

