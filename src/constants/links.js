export const interlinks ={
    signin_link: '/signin',
    signup_link: '/signup',
    dashboad: '/:id/dashboard'
}
//http://localhost:5003
const BASE_URL = 'https://pds-store-api.onrender.com';


// eslint-disable-next-line
export const GET_USER_BY_EMAIL = `${BASE_URL}/auth/email`;
// eslint-disable-next-line
export const GET_USER_BY_ID = `${BASE_URL}/user/`;
// eslint-disable-next-line
export const GET_USERS = `${BASE_URL}/user/users`;
// eslint-disable-next-line
export const LOGIN_URL = `${BASE_URL}/auth/login`;
// eslint-disable-next-line
export const SIGNUP_URL = `${BASE_URL}/auth/signup`;
// eslint-disable-next-line
export const CONFIRM_EMAIL_URL = `${BASE_URL}/auth/confirm-email`;
// eslint-disable-next-line
export const REQUEST_PASSWORD_CHANGE_URL = `${BASE_URL}/auth/request-password-change`;
// eslint-disable-next-line
export const PASSWORD_RESET_URL = `${BASE_URL}/auth/reset-password`;

