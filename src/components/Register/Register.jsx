import { useEffect } from 'react';
import './Register.css';
import FormLabel from '../FormAuth/FormLabel/FormLabel';
import FormButtons from '../FormAuth/FormButtons/FormButtons';
import FormHeader from '../FormAuth/FormHeader/FormHeader';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import { REG_EXP_EMAIL, REG_EXP_NAME, messages } from '../../utils/constants';

const Register = ({ handleSubmitRegistration, isLoading }) => {
  const { isFormValid, errors, handleChangeValidation, inputsValid, setInputsValid, values, handleInput } =
    useFormAndValidation();
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
              minLength={2}
              maxLength={30}
              placeholder='Введите имя'
              message={errors.name || ''}
              inputsValid={inputsValid.name}
              handleChangeValidation={(e) => handleInput(e, REG_EXP_NAME, messages.INPUT_NAME)}
            />
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
              type='password'
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

export default Register;
