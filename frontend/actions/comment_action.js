import * as CommentAPIUtil from '../util/comment_api_util';

export const RECEIVE_SINGLE_COMMENT = 'RECEIVE_SINGLE_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';

export const receiveSingleComment = comment => ({
    type: RECEIVE_SINGLE_COMMENT,
    comment,
})

export const successfulDeleteComment = (comment) => ({
    type: DELETE_COMMENT,
    commentId: comment.id,
})


export const fetchSingleComment = id => dispatch => (
    CommentAPIUtil.fetchSingleComment(id).then(comment => dispatch(receiveSingleComment(comment)))
)
