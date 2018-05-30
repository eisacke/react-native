import { client } from './client';
// import Auth from '../lib/Auth';
// import { getHeaders } from '../helpers';

export function login(credentials) {
  return dispatch => {
    return dispatch({
      type: 'LOGIN',
      payload: client.post('/admin/login', credentials)
    });
  };
}

export function register(user) {
  return dispatch => {
    return dispatch({
      type: 'REGISTER',
      payload: client.post('/admin/register', user)
    });
  };
}

export function newCredentials() {
  return { type: 'NEW_CREDENTIALS' };
}

export function isAuthenticated(payload) {
  return {
    type: 'IS_AUTHENTICATED',
    payload
  };
}

export function logout() {
  return { type: 'LOGOUT' };
}
