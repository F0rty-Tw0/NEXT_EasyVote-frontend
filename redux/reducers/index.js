import { combineReducers } from 'redux';
import user from './userReducer';
import loggedUser from './loggedUserReducer';

const allReducers = combineReducers({
  user,
  loggedUser,
});

export default allReducers;
