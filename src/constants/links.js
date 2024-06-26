export const interlinks ={
    signin_link: '/signin',
    signup_link: '/signup',
    dashboad: '/:id/dashboard'
}
//https://pds-store-api.onrender.com
// const BASE_URL = 'http://localhost:5498';
export const BASE_URL = process.env.NODE_ENV === "development"? 'http://localhost:5498': "https://pds-store-api.onrender.com";


//AUTH
// eslint-disable-next-line
export const GET_USER_BY_EMAIL = `${BASE_URL}/user/email`;
// eslint-disable-next-line
export const GET_USER_BY_ID = `${BASE_URL}/user/`;
// eslint-disable-next-line
export const UPDATE_USER = `${BASE_URL}/user/update/`;
// eslint-disable-next-line
export const GET_USERS = `${BASE_URL}/user/users`;
// eslint-disable-next-line
export const LOGIN_URL = `${BASE_URL}/login`;
// eslint-disable-next-line
export const SIGNUP_URL = `${BASE_URL}/signup`;
// eslint-disable-next-line
export const CONFIRM_EMAIL_URL = `${BASE_URL}/auth/confirm-email`;
// eslint-disable-next-line
export const REQUEST_PASSWORD_CHANGE_URL = `${BASE_URL}/auth/request-password-change`;
// eslint-disable-next-line
export const PASSWORD_RESET_URL = `${BASE_URL}/auth/reset-password`;


//Categories
// eslint-disable-next-line
export const GET_ALL_CATEGORIES = `${BASE_URL}/category/categories`;
// eslint-disable-next-line
export const GET_CATEGORY_BY_ID = `${BASE_URL}/category/`;
// eslint-disable-next-line
export const GET_CATEGORY_BY_NAME = `${BASE_URL}/category/`;

//Carousel Images
// eslint-disable-next-line
export const GET_ALL_CAROUSEL_IMAGES = `${BASE_URL}/carousel/images`;

// Products
// eslint-disable-next-line
export const GET_ALL_PRODUCTS = `${BASE_URL}/product/products`;
export const CREATE_PRODUCT = `${BASE_URL}/product/create`
export const ADD_IMAGE_TO_PRODUCT = `${BASE_URL}/product/add-images`
export const GET_PRODUCT_BY_ID = `${BASE_URL}/product/`