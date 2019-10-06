export const fetchSingleBusiness = (id) => {
    return $.ajax({
        method: "GET",
        url: `/api/businesses/${id}`,
    });
};

export const fetchAllBusinesses = () => {
    return $.ajax({
        method: "GET",
        url: '/api/businesses',
    });
};