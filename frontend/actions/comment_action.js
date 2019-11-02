import * as CommentAPIUtil from '../util/comment_api_util';

export const RECEIVE_SINGLE_COMMENT = 'RECEIVE_SINGLE_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS';

export const receiveSingleComment = ({comment, business}) => ({
    type: RECEIVE_SINGLE_COMMENT,
    comment,
    business,
})

export const successfulDeleteComment = (comment) => ({
    type: DELETE_COMMENT,
    commentId: comment.id,
})

export const receiveCommentErrors = errors => ({
    type: RECEIVE_COMMENT_ERRORS,
    errors,
})


export const fetchSingleComment = id => dispatch => (
    CommentAPIUtil.fetchSingleComment(id).then(comment => dispatch(receiveSingleComment(comment)))
)

export const updateComment = (id, comment) => dispatch => {
    return CommentAPIUtil.updateComment(id, comment).then((payload) => dispatch(receiveSingleComment(payload)), err => dispatch(receiveCommentErrors(err.responseJSON)))
}

export const createComment = (business_id, comment) => dispatch => (
    CommentAPIUtil.createComment(business_id, comment).then((payload) => dispatch(receiveSingleComment(payload)), err => dispatch(receiveCommentErrors(err.responseJSON)))
)