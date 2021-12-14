import { requestOptions } from 'context';

const authenticate = (url, credentials) => {
  const options = requestOptions('POST');
  console.log(options);
  options.body = JSON.stringify(credentials);
  return fetch(url, options);
};
export default authenticate;
