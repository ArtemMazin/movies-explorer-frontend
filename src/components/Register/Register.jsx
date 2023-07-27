import { useState } from 'react';
import './Register.css';
import FormLabel from './FormLabel/FormLabel';
import FormButtons from './FormButtons/FormButtons';
import FormHeader from './FormHeader/FormHeader';

const Register = () => {
  const [name, setName] = useState('Виталий');
  const [email, setEmail] = useState('pochta@yandex.ru');
  const [password, setPassword] = useState('••••••••••••••');

  return (
    <div className='register'>
      <FormHeader />
      <main className='register__main'>
        <form
          action=''
          className='register__form'>
          <div className='register__inputs'>
            <FormLabel
              value={name}
              setValue={setName}
              span={'Имя'}
              placeholder={'Введите имя'}
            />
            <FormLabel
              value={email}
              setValue={setEmail}
              span={'E-mail'}
              placeholder={'Введите e-mail'}
            />
            <FormLabel
              value={password}
              setValue={setPassword}
              span={'Пароль'}
              placeholder={'Введите пароль'}
              classError={'label__input_error'}
              errorMassage={'Что-то пошло не так...'}
            />
          </div>
          <FormButtons
            nameButton={'Зарегистрироваться'}
            span={'Уже зарегистрированы?'}
            nameLink={'Войти'}
          />
        </form>
      </main>
    </div>
  );
};

export default Register;
