export const fetchSearchBarBusiness = (find = "", loc = "") => {
    return $.ajax({
        method: "GET",
        url: `/api/search/businesses?find=${find}&loc=${loc}`,
    });
};

export const fetchSearchCategory = (category = "") => {
    return $.ajax({
        method: "GET",
        url: `/api/search/categories?category=${category}`,
    })
}