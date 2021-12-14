import { fetchWithSavedUserToken } from 'services/fetchApi';

const getAllParties = () => {
  return fetchWithSavedUserToken('parties');
};
export { getAllParties };
