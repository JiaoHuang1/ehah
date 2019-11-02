import { connect } from 'react-redux';
import UpdateCommentForm from './update_comment_form';
import { updateComment, fetchSingleComment, clearCommentError } from '../../actions/comment_action';

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
  
const mapDispatchToProps = dispatch => {
  return {
    fetchSingleComment: (id) => dispatch(fetchSingleComment(id)),
    updateComment: (id, comment) => dispatch(updateComment(id, comment)),
    clearCommentError: () => dispatch(clearCommentError()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateCommentForm);

