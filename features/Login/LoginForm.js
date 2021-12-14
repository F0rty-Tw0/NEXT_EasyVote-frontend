import { connect, useDispatch } from 'react-redux';
import { useState, useCallback } from 'react';
import { setLoggedUser } from 'redux/actions';
import { getLoggedUser } from 'endpoints/users';
import authenticateUser from './authenticateUser';

const LoginForm = ({ authenticate }) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const login = useCallback(
    async (event) => {
      event.preventDefault();
      const isLogged = await authenticate(formData);
      if (isLogged) {
        const fetchedUser = await getLoggedUser();
        dispatch(setLoggedUser(fetchedUser));
      }
    },
    [formData, authenticate, dispatch]
  );

  return (
    <form onSubmit={login}>
      <div className='input__wrapper'>
        <input
          className={`input ${
            formData.username.length > 0 ? 'input--filled' : ''
          }`}
          type='text'
          name='username'
          onChange={(event) =>
            setFormData({ ...formData, username: event.target.value })
          }
        />
        <span className='input--focus' placeholder='NemId'></span>
      </div>

      <div className='input__wrapper'>
        <input
          className={`input ${
            formData.password.length > 0 ? 'input--filled' : ''
          }`}
          type='password'
          name='password'
          onChange={(event) =>
            setFormData({ ...formData, password: event.target.value })
          }
        />
        <span className='input--focus' placeholder='Password'></span>
      </div>

      <div className='button__wrapper'>
        <button className='button'>Login</button>
        <div className='button__background'></div>
      </div>
      <div className='form__footer'>
        <span>This connection is encrypted</span>
      </div>
    </form>
  );
};

export default connect((state) => state, { authenticate: authenticateUser })(
  LoginForm
);
