import axios from 'axios';

const fetchData = async (url, signedUserToken) => {
  const config = {
    method: 'get',
    url,
    headers: {
      Authorization: 'Bearer ' + signedUserToken,
      'Content-Type': 'application/json',
    },
  };
  let response;
  try {
    response = await axios(config);
  } catch (err) {
    response = err.response;
  }
  return response;
}

export const getUserPosts = async (userID, signedUserToken) => {
  const url = `https://cool-odin-book.herokuapp.com/users/${userID}/posts`;
  const response = await fetchData(url, signedUserToken);
  switch (response.status) {
    case 200:
      return response.data;
    case 404:
      return "User Not Found";
    case 401:
      return "UnAuthorized";
    default:
      return "Unknown Error";
  }
}

export const getFeedPosts = async (signedUserToken) => {
  const url = `https://cool-odin-book.herokuapp.com/feed`;
  const response = await fetchData(url, signedUserToken);
  switch (response.status) {
    case 200:
      return response.data;
    case 401:
      return "UnAuthorized";
    default:
      return "Unknown Error";
  }
}
