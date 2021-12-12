import { BiLogIn } from 'react-icons/bi';
import LoginForm from './LoginForm';

const Login = () => {
  return (
    <div className='form__container'>
      <div className='form__wrapper'>
        <span className='form__title'>Welcome</span>
        <div className='form__icon'>
          <BiLogIn />
        </div>
        <LoginForm />
      </div>
    </div>
  );
};
export default Login;
