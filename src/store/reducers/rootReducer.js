import { combineReducers } from 'redux';
import { default as authReducer } from './authReducer';

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
