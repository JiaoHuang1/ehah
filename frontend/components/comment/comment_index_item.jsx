import React from 'react';
import { Link } from 'react-router-dom';

const CommentIndexItem = ({comment: {rating, body, user_id, updated_at}, users, currentUserId, businessId} ) => {
    let editAndDelete;
    if (user_id === currentUserId) {
        editAndDelete = (
            <div>
                <Link className="link-and-button" to={`/businesses/${businessId}/editreview`}>Edit</Link>
                <button className="link-and-button">Delete</button>
            </div>
        )
    }


    let commentIndexRatingClassName;
    if (rating <= 1) {
        commentIndexRatingClassName = "one-star";
    } else if (rating <= 2) {
        commentIndexRatingClassName = "two-star";
    } else if (rating <= 3) {
        commentIndexRatingClassName = "three-star";
    } else if (rating <= 4) {
        commentIndexRatingClassName = "four-star";
    } else {
        commentIndexRatingClassName = "five-star";
    }
    


    return (
        <>
        <div className="comment-index-main">
            <p className="comment-index-names">{users[user_id].first_name} {users[user_id].last_name}</p>
            <div className="comment-index-comment-box-main">
                <div className="comment-index-star-role">
                    <span className={commentIndexRatingClassName}>☆</span>
                    <span className={commentIndexRatingClassName}>☆</span>
                    <span className={commentIndexRatingClassName}>☆</span>
                    <span className={commentIndexRatingClassName}>☆</span>
                    <span className={commentIndexRatingClassName}>☆</span>
                    <span className="comment-index-time">{updated_at.split("T")[0]}</span>
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