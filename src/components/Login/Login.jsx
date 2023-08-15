import React, { useEffect } from 'react';
import FormButtons from '../FormAuth/FormButtons/FormButtons';
import FormLabel from '../FormAuth/FormLabel/FormLabel';
import FormHeader from '../FormAuth/FormHeader/FormHeader';
import './Login.css';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import { REG_EXP_EMAIL, messages } from '../../utils/constants';

const Login = ({ handleSubmitLogin, isLoading }) => {
  const { isFormValid, errors, handleChangeValidation, inputsValid, setInputsValid, values, handleInput } =
    useFormAndValidation();
  const { email, password } = values;

  useEffect(() => {
    //при монтировании инпуты валидны
    setInputsValid({ name: true, email: true, password: true });
  }, []);

  return (
    <div className='login'>
      <FormHeader />
      <main className='login__main'>
        <form
          className='login__form'
          noValidate
          onSubmit={(e) => handleSubmitLogin(e, email, password)}>
          <div className='login__inputs'>
            <FormLabel
              value={email || ''}
              type='email'
              name='email'
              span='E-mail'
              placeholder='Введите e-mail'
              inputsValid={inputsValid.email}
              message={errors.email || ''}
              handleChangeValidation={(e) => handleInput(e, REG_EXP_EMAIL, messages.INPUT_EMAIL)}
            />
            <FormLabel
              type='text'
              value={password || ''}
              name='password'
              span='Пароль'
              minLength='6'
              placeholder='Введите пароль'
              inputsValid={inputsValid.password}
              message={errors.password || ''}
              handleChangeValidation={handleChangeValidation}
            />
          </div>
          <FormButtons
            isFormValid={isFormValid}
            isLoading={isLoading}
          />
        </form>
      </main>
    </div>
  );
};

export default Login;
