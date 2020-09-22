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
};

export const getUserPosts = async (userID, signedUserToken) => {
  const url = `https://cool-odin-book.herokuapp.com/users/${userID}/posts`;
  const response = await fetchData(url, signedUserToken);
  switch (response.status) {
    case 200:
      return response.data;
    case 404:
      return 'User Not Found';
    case 401:
      return 'UnAuthorized';
    default:
      return 'Unknown Error';
  }
};

export const getFeedPosts = async (signedUserToken) => {
  return [
    {
      _id: 'string',
      user: {
        firstName: 'Omar',
        lastName: 'Bohoty',
        photoUrl: 'string',
        birthday: '2020-09-20',
        email: 'string',
      },
      type: 'text',
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quam eaque enim, amet deleniti facere animi id nisi voluptate architecto quidem labore laudantium delectus 
        ullam minima cupiditate deserunt provident quos?Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum molestias, facere expedita iste delectus, nisi officiis eligendi amet corrupti quos cupiditate culpa, facilis et aliquam ipsam consequuntur assumenda ab voluptate.`,
      likes: 0,
      createdAt: '2020-09-20',
    },
    // {
    //   "_id": "string",
    //   "user": {
    //     "firstName": "string",
    //     "lastName": "string",
    //     "photoUrl": "string",
    //     "birthday": "2020-09-21",
    //     "email": "string"
    //   },
    //   "type": "text",
    //   "text": "string",
    //   "likes": 0,
    //   "createdAt": "2020-09-21"
    // }, {
    //   "_id": "string",
    //   "user": {
    //     "firstName": "string",
    //     "lastName": "string",
    //     "photoUrl": "string",
    //     "birthday": "2020-09-21",
    //     "email": "string"
    //   },
    //   "type": "text",
    //   "text": "string",
    //   "likes": 0,
    //   "createdAt": "2020-09-21"
    // }, {
    //   "_id": "string",
    //   "user": {
    //     "firstName": "string",
    //     "lastName": "string",
    //     "photoUrl": "string",
    //     "birthday": "2020-09-21",
    //     "email": "string"
    //   },
    //   "type": "text",
    //   "text": "string",
    //   "likes": 0,
    //   "createdAt": "2020-09-21"
    // }
  ];
  const url = `https://cool-odin-book.herokuapp.com/feed`;
  const response = await fetchData(url, signedUserToken);
  switch (response.status) {
    case 200:
      return response.data;
    case 401:
      return 'UnAuthorized';
    default:
      return 'Unknown Error';
  }
};
