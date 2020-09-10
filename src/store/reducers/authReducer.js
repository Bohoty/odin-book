const initState = {
  signedUserName: '',
  signedUserId: '',
  signedUserToken: null,
  signedUserEmail: '',
  signInError: null,
  signUpError: null,
};
const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SIGNUP_SUCCESS':
      return {
        ...state,
        signedUserName: action.response.data.name,
        signedUserEmail: action.response.data.email,
        signedUserId: action.response.data._id,
        signUpError: null,
      };
    case 'SIGNUP_ERROR':
      return {
        ...state,
        signUpError: action.response.data.errors[0],
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        signedUserEmail: action.response.data.user.email,
        signedUserId: action.response.data.user._id,
        signedUserName: action.response.data.user.name,
        signedUserToken: action.response.data.token,
      };
    case 'LOGIN_ERROR':
      return {
        ...state,
        signInError: action.response.data.message,
      };
    case 'SIGNOUT':
      return {
        ...initState,
      };
    default:
      return {
        ...state,
      };
  }
};

export default authReducer;
