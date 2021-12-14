import { fetchWithUserToken } from 'services/fetchApi';

const getLoggedUser = () => {
  return fetchWithUserToken('users/user');
};
export { getLoggedUser };
