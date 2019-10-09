export const createComment = (business_id, comment) => {
    // debugger
    return $.ajax({
        method: "POST",
        url: `/api/businesses/${business_id}/comments`,
        data: { comment },
    });
};

export const updateComment = (id, comment) => {
    return $.ajax({
        method: "PATCH",
        url: `/api/comments/${id}`,
        data: { comment },
    });
};


export const deleteComment = (id) => {
    return $.ajax({
        method: "DELETE",
        url: `/api/comments/${id}`,
    });
};