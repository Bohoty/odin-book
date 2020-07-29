import axios from 'axios';
const getResponse = (url, user) => {
  const data = JSON.stringify(user);
  const config = {
    method: 'post',
    url,
    headers: {
      'Content-Type': 'application/json',
    },
    data: data,
  };
  return axios(config);
};

export const signIn = (user) => {
  return async (dispatch, getState) => {
    const url = 'https://cool-odin-book.herokuapp.com/login';
    let response;
    try {
      response = await getResponse(url, user);
    } catch (err) {
      response = err.response;
    }
    switch (response.status) {
      case 200:
        dispatch({ type: 'LOGIN_SUCCESS', response });
        break;
      case 400:
        dispatch({ type: 'LOGIN_ERROR', response });
        break;
      default:
        dispatch({ type: 'UNDEFIEND' });
    }
  };
};

export const signUp = (user) => {
  return async (dispatch, getState) => {
    const url = 'https://cool-odin-book.herokuapp.com/users';
    let response;
    try {
      response = await getResponse(url, user);
    } catch (err) {
      response = err.response;
    }
    switch (response.status) {
      case 200:
        dispatch({ type: 'SIGNUP_SUCCESS', response });
        break;
      case 400:
        dispatch({ type: 'SIGNUP_ERROR', response });
        break;
      default:
        dispatch({ type: 'UNDEFIEND' });
    }
  };
};

export const signOut = () => {
  return async (dispatch, getState) => {
    dispatch({ type: 'SIGNOUT' });
  };
};
