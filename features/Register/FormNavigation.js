const FormNavigation = ({ step, completeStep, totalSteps, isValid }) => {

  const renderSteps = () => {
    let markers = [];
    for (let i = 0; i < totalSteps; i++)
      markers.push(
        <span
          key={i}
          className={step >= i ? 'completed' : 'uncompleted'}
        >●</span>
      );
    return markers;
  };

  return (
    <div className='form__footer'>
      {step === totalSteps - 1 && (
        <div className='button__wrapper'>
          <button type='submit' className='button' disabled={!isValid}>
            SAVE
          </button>
          <div className='button__background'></div>
        </div>
      )}
      {step < totalSteps - 1 && (
        <div className='button__wrapper'>
          <button
            type='button'
            className='button'
            disabled={!isValid}
            onClick={() => completeStep()}
          >
            NEXT
          </button>
          <div className='button__background'></div>
        </div>
      )}
      {renderSteps()}
    </div>
  );
};

export default FormNavigation;
