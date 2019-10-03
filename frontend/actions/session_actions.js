import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_ERROR = 'CLEAR_ERROR'

export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser,
});

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors,
})

export const clearError = () => ({
    type: CLEAR_ERROR,
})

export const signup = user => dispatch => (
    SessionAPIUtil.signup(user).then(user => dispatch(receiveCurrentUser(user)), err => dispatch(receiveErrors(err.responseJSON)))
);

export const login = user => dispatch => (
    SessionAPIUtil.login(user).then(user => dispatch(receiveCurrentUser(user)), err => dispatch(receiveErrors(err.responseJSON)))
);

export const logout = () => dispatch => (
    SessionAPIUtil.logout().then(() => dispatch(logoutCurrentUser()), err => dispatch(receiveErrors(err.responseJSON)))
)