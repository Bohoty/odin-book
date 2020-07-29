import axios from 'axios';
export const getAllPosts = () => {
  return async (dispatch, getState) => {
    const url = 'https://cool-odin-book.herokuapp.com/posts';
    const state = getState();
    const config = {
      method: 'get',
      url,
      headers: {
        Authorization: 'Bearer ' + state.auth.signedUserToken,
        'Content-Type': 'application/json',
      },
    };
    let response;
    try {
      response = await axios(config);
    } catch (err) {
      response = err.response;
    }
    switch (response.status) {
      case 200:
        dispatch({ type: 'GET_ALL_POSTS_SUCCESS', posts: response.data });
        break;
      default:
        dispatch({ type: 'GET_ALL_POSTS_FAILED_UNAUTHORIZED' });
    }
  };
};
