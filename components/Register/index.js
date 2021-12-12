import { BiLogIn } from 'react-icons/bi';
import RegisterForm from './RegisterForm';

const Register = () => {
  return (
    <div className='form__container'>
      <div className='form__wrapper'>
        <span className='form__title'>Register</span>
        <div className='form__icon'>
          <BiLogIn />
        </div>
          <RegisterForm />
      </div>
    </div>
  );
};
export default Register;
