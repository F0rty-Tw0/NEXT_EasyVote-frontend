import Image from 'next/image';
import LoginForm from './LoginForm';

const Login = () => {
  return (
    <div className='form__container'>
      <div className='form__wrapper'>
        <span className='form__title'>Welcome</span>
        <div className='form__icon'>
          <Image
            width='48'
            height='48'
            src='/favicon.ico'
            alt='Easy Vote logo'
          />
        </div>
        <LoginForm />
      </div>
    </div>
  );
};
export default Login;
