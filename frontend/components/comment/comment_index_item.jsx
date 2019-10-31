import React from 'react';
import { Link } from 'react-router-dom';

const CommentIndexItem = ({comment: {id, rating, body, user_id, updated_at}, users, currentUserId, deleteComment} ) => {
    let editAndDelete;
    if (user_id === currentUserId) {
        editAndDelete = (
            <div>
                <Link className="link-and-button" to={`/comments/${id}`}>Edit</Link>
                <button className="link-and-button" onClick={() => deleteComment(id)}>Delete</button>
            </div>
        )
    }


    let commentIndexRating;
    if (rating <= 1) {
        commentIndexRating = "one-star";
    } else if (rating <= 2) {
        commentIndexRating = "two-star";
    } else if (rating <= 3) {
        commentIndexRating = "three-star";
    } else if (rating <= 4) {
        commentIndexRating = "four-star";
    } else {
        commentIndexRating = "five-star";
    }
    
    // debugger

    return (
        <>
        <div className="comment-index-main">
            <p className="comment-index-names">{users[user_id].first_name} {users[user_id].last_name}</p>
            <div className="comment-index-comment-box-main">
                <div className="comment-index-star-role">
                    <span className={commentIndexRating}>☆</span>
                    <span className={commentIndexRating}>☆</span>
                    <span className={commentIndexRating}>☆</span>
                    <span className={commentIndexRating}>☆</span>
                    <span className={commentIndexRating}>☆</span>
                    <span className="comment-index-time">{updated_at.split("T")[0]} {updated_at.split("T")[1].slice(0, 8)}</span>
                </div>
                
                <p>{body}</p>
                {editAndDelete} 
            </div>
        </div>
        <section></section>
        </>
    )
}

export default CommentIndexItem;