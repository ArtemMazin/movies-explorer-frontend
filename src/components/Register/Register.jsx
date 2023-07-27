import { useState } from 'react';
import './Register.css';
import FormLabel from '../FormAuth/FormLabel/FormLabel';
import FormButtons from '../FormAuth/FormButtons/FormButtons';
import FormHeader from '../FormAuth/FormHeader/FormHeader';

const Register = () => {
  const [name, setName] = useState('Виталий');
  const [email, setEmail] = useState('pochta@yandex.ru');
  const [password, setPassword] = useState('••••••••••••••');

  return (
    <div className='register'>
      <FormHeader />
      <main>
        <form action=''>
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
          <FormButtons />
        </form>
      </main>
    </div>
  );
};

export default Register;
