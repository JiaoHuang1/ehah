import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import NavBarCreateCommentForm from './nav_bar_create_comment_form';

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBarCreateCommentForm);