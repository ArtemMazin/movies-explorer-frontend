import { useEffect, useState } from 'react';
import './Register.css';
import FormLabel from '../FormAuth/FormLabel/FormLabel';
import FormButtons from '../FormAuth/FormButtons/FormButtons';
import FormHeader from '../FormAuth/FormHeader/FormHeader';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';

const Register = ({ handleSubmitRegistration }) => {
  const { isFormValid, errors, handleChangeValidation, inputsValid, setInputsValid, values } = useFormAndValidation();
  const { name, email, password } = values;

  useEffect(() => {
    //при монтировании инпуты валидны
    setInputsValid({ name: true, email: true, password: true });
  }, []);

  return (
    <div className='register'>
      <FormHeader />
      <main className='register__main'>
        <form
          className='register__form'
          noValidate
          onSubmit={(e) => handleSubmitRegistration(e, name, email, password)}>
          <div className='register__inputs'>
            <FormLabel
              type='text'
              value={name || ''}
              name='name'
              span='Имя'
              placeholder='Введите имя'
              errorMessage={errors.name || ''}
              inputsValid={inputsValid.name}
              handleChangeValidation={handleChangeValidation}
            />
            <FormLabel
              value={email || ''}
              type='email'
              name='email'
              span='E-mail'
              placeholder='Введите e-mail'
              inputsValid={inputsValid.email}
              errorMessage={errors.email || ''}
              handleChangeValidation={handleChangeValidation}
            />
            <FormLabel
              type='text'
              value={password || ''}
              name='password'
              span='Пароль'
              minLength='6'
              placeholder='Введите пароль'
              inputsValid={inputsValid.password}
              errorMessage={errors.password || ''}
              handleChangeValidation={handleChangeValidation}
            />
          </div>
          <FormButtons isFormValid={isFormValid} />
        </form>
      </main>
    </div>
  );
};

export default Register;
