import { useEffect, useState } from 'react';
import { BiLogIn } from 'react-icons/bi';

const Login = () => {
  const [nemId, setNemId] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className='login__container'>
      <div className='login__wrapper'>
        <form>
          <span className='login__title'>Welcome</span>
          <div className='login__icon'>
            <BiLogIn />
          </div>
          <div className='input__wrapper'>
            <input
              className={`login__input ${
                nemId.length > 0 ? 'login__input--filled' : ''
              }`}
              type='text'
              name='email'
              onChange={(event) => setNemId(event.target.value)}
            />
            <span className='login__input--focus' placeholder='NemId'></span>
          </div>

          <div className='input__wrapper'>
            <input
              className={`login__input ${
                password.length > 0 ? 'login__input--filled' : ''
              }`}
              type='password'
              name='password'
              onChange={(event) => setPassword(event.target.value)}
            />
            <span className='login__input--focus' placeholder='Password'></span>
          </div>

          <div className='button__wrapper'>
            <button className='button'>Login</button>
            <div className='button__background'></div>
          </div>
          <div className='login__footer'>
            <span>This connection is encrypted</span>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
