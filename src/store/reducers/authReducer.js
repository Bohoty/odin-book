const initState = {
  signedUserName: 'مهندس جلال الطوخي(عضوي طويل)',
  signedUserId: '69',
  signedUserToken: '5555555555555555555555555555',
  signedUserEmail: 'GalalEltoo5y@zeby.kosomk',
};
const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SIGNUP_SUCCESS':
      return {
        ...state,
        signedUserName: action.response.data.name,
        signedUserEmail: action.response.data.email,
        signedUserId: action.response.data._id,
      };
    case 'SIGNIN':
      return {
        ...state,
      };
    default:
      return {
        ...state,
      };
  }
};

export default authReducer;
