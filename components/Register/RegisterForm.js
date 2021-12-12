import { useState } from 'react';
import FormNavigation from './FormNavigation';
import { useForm } from 'react-hook-form';

const RegisterForm = () => {
  const [step, setStep] = useState(0);

  const completeStep = () => {
    setStep((current) => current + 1);
  };

  const onSubmit = (data) => console.log(data);

  const submit = async (event) => {
    event.preventDefault();
    handleSubmit(onSubmit)(event);
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({ mode: 'all' });

  return (
    <form onSubmit={submit}>
      {step === 0 && (
        <section>
          <div className='input__wrapper'>
            <input
              {...register('name', { required: true })}
              className={`input ${watch('name') ? 'input--filled' : ''}`}
              type='text'
            />
            {errors['name'] && <span className='input__error'>mandatory</span>}
            <span className='input--focus' placeholder='Full Name'></span>
          </div>
          <div className='input__wrapper'>
            <input
              {...register('birthday', {
                required: true,
              })}
              className={`input ${
                watch('birthday') ? 'input--filled' : 'input--empty'
              }`}
              placeholder='none'
              type='date'
            />
            {errors['birthday'] && (
              <span className='input__error'>mandatory</span>
            )}
            <span className='input--focus' placeholder='Birth Day'></span>
          </div>
        </section>
      )}
      {step === 1 && (
        <section>
          <div className='input__wrapper'>
            <input
              {...register('email', { required: true })}
              className={`input ${watch('email') ? 'input--filled' : ''}`}
              type='email'
            />
            {errors['email'] && <span className='input__error'>mandatory</span>}
            <span className='input--focus' placeholder='Email'></span>
          </div>
          <div className='input__wrapper'>
            <input
              {...register('cpr', { required: true })}
              className={`input ${watch('cpr') ? 'input--filled' : ''}`}
              type='number'
            />
            {errors['cpr'] && <span className='input__error'>mandatory</span>}
            <span className='input--focus' placeholder='CPR'></span>
          </div>
        </section>
      )}
      {step === 2 && (
        <section>
          <div className='input__wrapper'>
            <input
              {...register('phone')}
              className={`input ${watch('phone') ? 'input--filled' : ''}`}
              type='number'
            />
            {errors['phone'] && <span className='input__error'>mandatory</span>}
            <span className='input--focus' placeholder='Phone'></span>
          </div>
          <div className='input__wrapper'>
            <input
              {...register('address', { required: true })}
              className={`input ${watch('address') ? 'input--filled' : ''}`}
              type='text'
            />
            {errors['address'] && (
              <span className='input__error'>mandatory</span>
            )}
            <span className='input--focus' placeholder='Address'></span>
          </div>
          <div className='input__wrapper'>
            <input
              {...register('zipCode', { required: true })}
              className={`input ${watch('zipCode') ? 'input--filled' : ''}`}
              type='text'
            />
            {errors['zipCode'] && (
              <span className='input__error'>mandatory</span>
            )}
            <span className='input--focus' placeholder='Zip Code'></span>
          </div>
        </section>
      )}
      <FormNavigation
        step={step}
        totalSteps={3}
        completeStep={completeStep}
        isValid={isValid}
      />
    </form>
  );
};

export default RegisterForm;
