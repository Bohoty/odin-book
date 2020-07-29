const initState = {
  posts: null,
};
const postsReducer = (state = initState, action) => {
  switch (action.type) {
    case 'GET_ALL_POSTS_SUCCESS':
      return {
        ...state,
        posts: action.posts,
      };
    default:
      return {
        posts: null,
      };
  }
};
export default postsReducer;
