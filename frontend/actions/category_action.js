import * as CategoryAPIUtil from '../util/category_api_util';

export const RECEIVE_SINGLE_CATEGORY = 'RECEIVE_SINGLE_CATEGORY';
export const RECEIVE_ALL_CATEGORIES = 'RECEIVE_ALL_CATEGORIES';

export const receiveSingleCategory = category => ({
    type: RECEIVE_SINGLE_CATEGORY,
    category,
})

export const receiveAllCategories = categories => ({
    type: RECEIVE_ALL_CATEGORIES,
    categories,
})

export const fetchSingleCategory = category_name => dispatch => (
    CategoryAPIUtil.fetchSingleCategory(category_name).then(category => dispatch(receiveSingleCategory(category)))
)

export const fetchAllCategories = () => dispatch => (
    CategoryAPIUtil.fetchAllCategories().then(categories => dispatch(receiveAllCategories(categories)))
)