export const fetchSingleBusiness = (id) => {
    return $.ajax({
        method: "GET",
        url: `/api/businesses/${id}`,
    });
};