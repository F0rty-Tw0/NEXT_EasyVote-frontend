import useSWR from 'swr';
import { fetchWithUserToken, postWithSavedUserToken } from 'services/fetchApi';

const useGetLoggedUser = () => {
  const { data, error, ...rest } = useSWR('users/user', fetchWithUserToken);
  return { data, error, loading: !data && !error, ...rest };
};

const getLoggedUser = () => {
  return fetchWithUserToken('users/user');
};

const createUser = (user) => {
  return postWithSavedUserToken(user, 'users');
};
export { getLoggedUser, useGetLoggedUser, createUser };
