/*jshint esversion: 6 */
import * as ApiUtils from '../util/session_api_util';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const login = (user) => {
  return dispatch => {
    return ApiUtils.login(user).then(currentUser =>{
      return(dispatch(receiveCurrentUser(currentUser)));
    });
  };
};

export const logout = () => dispatch => (
  ApiUtils.logout().then(user => (
    dispatch(receiveCurrentUser(null))
  ))
);


const receiveCurrentUser = currentUser => {
  return({
    type: RECEIVE_CURRENT_USER,
    currentUser: currentUser
  });
};


export const receiveSessionErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});





//we should run errors here, soon