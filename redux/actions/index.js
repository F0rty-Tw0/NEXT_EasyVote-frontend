import {
  SET_USER,
  REMOVE_USER,
  SET_PARTIES,
  SET_LOGGED_USER,
  REMOVE_LOGGED_USER,
} from '../types';

const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

const removeUser = () => ({
  type: REMOVE_USER,
});

const setParties = (parties) => ({
  type: SET_PARTIES,
  payload: parties,
});

const setLoggedUser = (user) => ({
  type: SET_LOGGED_USER,
  payload: user,
});

const removeLoggedUser = () => ({
  type: REMOVE_LOGGED_USER,
});

export { setUser, removeUser, setParties, setLoggedUser, removeLoggedUser };
