import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const GO_TO_BOOKINGS = 'GO_TO_BOOKINGS'

export const receiveCurrentUser = currentUser => {
   
    return( 
    {type: RECEIVE_CURRENT_USER,
    currentUser}
    )
}

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const goToBookings = (bookings) => ({
    type: GO_TO_BOOKINGS,
    bookings
})

export const fetchBookings = (userId) => dispatch => {
 
    return(
        APIUtil.fetchBookings(userId).then(bookings=> dispatch(goToBookings(bookings)))
    )}


export const signup = user => dispatch => (
    APIUtil.signup(user).then(user => (
        dispatch(receiveCurrentUser(user))
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
);

export const login = user => dispatch => {
    debugger
    return(
    APIUtil.login(user).then(user => (
        dispatch(receiveCurrentUser(user))
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
    )
}

export const logout = () => dispatch => (
    APIUtil.logout().then(user => (
        dispatch(logoutCurrentUser(user))
    ))
);
