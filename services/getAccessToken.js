import checkIfTokenIsExpired from 'utils/checkIfTokenIsExpired';
import { getCookie } from 'utils/cookieHelper';
import authenticate from './authenticate';
const url = process.env.NEXT_PUBLIC_API_AUTH;

let userAccessToken;

const getUserAccessToken = async (userCredentials) => {
  userAccessToken = getSavedUserToken();
  if (checkIfTokenIsExpired(userAccessToken)) {
    const response = await authenticate(url, userCredentials);
    userAccessToken = await response.json();
  }
  return userAccessToken;
};

const getSavedUserToken = () => {
  const user = getCookie('user');
  if (user) {
    const savedUser = JSON.parse(user);
    return savedUser.accessToken;
  }
  return null;
};

export { getUserAccessToken, getSavedUserToken };
