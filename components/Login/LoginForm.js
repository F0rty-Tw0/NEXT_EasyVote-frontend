import { useState } from 'react';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    nemId: '',
    password: '',
  });
  return (
    <form>
      <div className='input__wrapper'>
        <input
          className={`input ${
            formData.nemId.length > 0 ? 'input--filled' : ''
          }`}
          type='text'
          name='nemId'
          onChange={(event) =>
            setFormData({ ...formData, nemId: event.target.value })
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

export default LoginForm;
