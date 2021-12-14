import { combineReducers } from 'redux';
import user from './userReducer';
import parties from './partiesReducer';
import loggedUser from './loggedUserReducer';

const allReducers = combineReducers({
  user,
  parties,
  loggedUser,
});

export default allReducers;
