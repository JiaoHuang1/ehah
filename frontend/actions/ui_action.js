import * as CommentAPIUtil from '../util/comment_api_util';

export const SUCCESSFUL_UPDATE_COMMENT = 'RECEIVE_UPDATE_COMMENT';

export const successfulUpdateComment = () => ({
    type: SUCCESSFUL_UPDATE_COMMENT,
    updateButton: {updateButton: "Updated!"},
})

export const updateComment = (id, comment) => dispatch => (
    CommentAPIUtil.updateComment(id, comment).then(() => dispatch(successfulUpdateComment()))
)