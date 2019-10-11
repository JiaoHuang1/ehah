import * as CommentAPIUtil from '../util/comment_api_util';

export const SUCCESSFUL_UPDATE_COMMENT = 'RECEIVE_UPDATE_COMMENT';
export const SUCCESSFUL_CREATE_COMMENT = 'SUCCESSFUL_CREATE_COMMENT';

export const successfulUpdateComment = () => ({
    type: SUCCESSFUL_UPDATE_COMMENT,
    updateButton: {updateButton: "Updated!"},
})

export const successfulCreateComment = () => ({
    type: SUCCESSFUL_CREATE_COMMENT,
    createButton: {createButton: "Created!"}
})

// export const updateComment = (id, comment) => dispatch => (
//     CommentAPIUtil.updateComment(id, comment).then(() => dispatch(successfulUpdateComment()))
// )

// export const createComment = (business_id, comment) => dispatch => (
//     CommentAPIUtil.createComment(business_id, comment).then(() => dispatch(successfulCreateComment()))
// )