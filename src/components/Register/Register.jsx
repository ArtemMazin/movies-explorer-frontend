import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Register.css';

const Register = () => {
  const [name, setName] = useState('Виталий');
  const [email, setEmail] = useState('pochta@yandex.ru');
  const [password, setPassword] = useState('••••••••••••••');

  return (
    <div className='register'>
      <header className='register__header'>
        <Link to={'/'}>
          <img
            src={logo}
            alt='Логотип проекта: Movies-Explorer'
            className='register__logo'
          />
        </Link>
        <h1 className='register__title'>Добро пожаловать!</h1>
      </header>
      <main className='register__main'>
        <form
          action=''
          className='register__form'>
          <div className='register__inputs'>
            <label>
              <span className='register__input-name'>Имя</span>
              <input
                type='text'
                className='register__input'
                placeholder='Введите имя'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <span className='register__error-message'></span>
            </label>
            <label>
              <span className='register__input-name'>E-mail</span>
              <input
                type='text'
                className='register__input'
                placeholder='Введите e-mail'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className='register__error-message'></span>
            </label>
            <label>
              <span className='register__input-name'>Пароль</span>
              <input
                type='text'
                className='register__input register__input_error'
                placeholder='Введите пароль'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className='register__error-message'>Что-то пошло не так...</span>
            </label>
          </div>
          <button
            type='submit'
            className='register__submit-btn'>
            Зарегистрироваться
          </button>
          <div className='register__nav'>
            <span className='register__span'>Уже зарегистрированы?</span>
            <Link
              to={'/signin'}
              className='register__login-link'>
              Войти
            </Link>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Register;
