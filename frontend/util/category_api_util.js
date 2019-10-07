export const fetchSingleCategory = (category_name) => {
    return $.ajax({
        method: "GET",
        url: `/api/categories/${category_name}`,
    });
};

export const fetchAllCategories = () => {
    return $.ajax({
        method: "GET",
        url: `/api/categories/`,
    });
};
