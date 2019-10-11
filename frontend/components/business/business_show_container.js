import { connect } from 'react-redux';
import { fetchSingleBusiness, deleteComment } from '../../actions/business_action';
// import { fetchAllCategories } from '../../actions/category_action';
import BusinessShow from './business_show';

const mapStateToProps = (state, ownProps) => {
  const businessId = ownProps.match.params.businessId;
  const business = state.entities.businesses[businessId];
  
  let categories;
  let comments;
  let users = {};
  if (business) {
    // debugger
    const categoryIds = business.category_ids;
    categories = categoryIds.map(catId => {
      return state.entities.categories[catId]
    })
    // categoryIds.forEach(catId => {
    //   return categories[catId] = state.entities.categories[catId];
    // }) 
  
    const userIds = [];

    comments = business.comment_ids.map(comment_id => {
      const comment = state.entities.comments[comment_id];
      userIds.push(comment.user_id);
      return comment;
    })

    userIds.forEach(userId => {
      users[userId] = state.entities.users[userId];
    })
  }

  return {
    business,
    categories,
    comments,
    users,
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