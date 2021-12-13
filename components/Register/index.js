import Image from 'next/image';
import RegisterForm from './RegisterForm';

const Register = () => {
  return (
    <div className='form__container'>
      <div className='form__wrapper'>
        <span className='form__title'>Register</span>
        <Image width='48' height='48' src='/favicon.ico' alt='Easy Vote logo' />
        <RegisterForm />
      </div>
    </div>
  );
};
export default Register;
