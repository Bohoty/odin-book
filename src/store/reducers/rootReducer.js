import { combineReducers } from 'redux';
import { default as authReducer } from './authReducer';
import postsReducer from './postsReducer';
const rootReducer = combineReducers({
  auth: authReducer,
  post: postsReducer,
});

export default rootReducer;
