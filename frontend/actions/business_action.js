import * as BusinessAPIUtil from '../util/business_api_util';
import * as SearchAPIUtil from '../util/search_api_util';
// import * as CommentAPIUtil from '../util/comment_api_util';

export const RECEIVE_SINGLE_BUSINESS = 'RECEIVE_SINGLE_BUSINESS';
export const RECEIVE_ALL_BUSINESSES = 'RECEIVE_ALL_BUSINESSES';

export const receiveSingleBusiness = business => ({
    type: RECEIVE_SINGLE_BUSINESS,
    business,
})

export const receiveAllBusinesses = businesses => ({
    type: RECEIVE_ALL_BUSINESSES,
    businesses,
})

export const fetchSingleBusiness = id => dispatch => (
    BusinessAPIUtil.fetchSingleBusiness(id).then(business => dispatch(receiveSingleBusiness(business)))
)

export const fetchAllBusinesses = () => dispatch => (
    BusinessAPIUtil.fetchAllBusinesses().then(businesses => dispatch(receiveAllBusinesses(businesses)))
)

// search thunk action:

export const fetchSearchBarBusiness = (find = "", loc = "") => dispatch => (
    SearchAPIUtil.fetchSearchBarBusiness(find, loc).then(businesses => dispatch(receiveAllBusinesses(businesses)))
)

export const fetchSearchCategory = (category = "") => dispatch => (
    SearchAPIUtil.fetchSearchCategory(category).then(businesses => dispatch(receiveAllBusinesses(businesses)))
)

// comment only have thunk action since it doesn't need to be in a seperate slice of state:

export const updateComment = (id, comment) => dispatch => (
    CommentAPIUtil.updateComment(id, comment).then(() => dispatch)
)