import { removeCookie } from 'utils/cookieHelper';
import { removeUser, removeLoggedUser } from 'redux/actions';
import Router from 'next/router';

const deAuthenticateUser = () => {
  {
    return (dispatch) => {
      removeCookie('user');
      dispatch(removeUser());
      dispatch(removeLoggedUser());
      Router.push('/');
    };
  }
};

export default deAuthenticateUser;
