import * as BusinessAPIUtil from '../util/business_api_util';

export const RECEIVE_SINGLE_BUSINESS = 'RECEIVE_SINGLE_BUSINESS';

export const receiveSingleBusiness = business => ({
    type: RECEIVE_SINGLE_BUSINESS,
    business,
})

export const fetchSingleBusiness = id => dispatch => (
    BusinessAPIUtil.fetchSingleBusiness(id).then(business => dispatch(receiveSingleBusiness(business)))
)