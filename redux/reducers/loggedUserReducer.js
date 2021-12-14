import { SET_LOGGED_USER, REMOVE_LOGGED_USER } from '../types';

const loggedUserReducer = (
  state = {
    loggedUser: null,
  },
  action
) => {
  switch (action.type) {
    case SET_LOGGED_USER:
      return { ...state, loggedUser: action.payload };
    case REMOVE_LOGGED_USER:
      return { loggedUser: null };

    default:
      return state;
  }
};

export default loggedUserReducer;
