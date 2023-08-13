import React, { useContext, useEffect } from 'react';
import './Profile.css';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';

const Profile = ({ handleUpdateUser, handleLogout }) => {
  const { isFormValid, errors, handleChangeValidation, inputsValid, setInputsValid, values, resetForm, setValues } =
    useFormAndValidation();
  const { email, name } = values;

  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    //сначала очищаем форму при открытии
    resetForm();
    //при открытии попапа инпуты валидны
    setInputsValid({ name: true, email: true });
    //в данном попапе инпуты заполнены при открытии
    setValues({ name: currentUser.name || '', email: currentUser.email || '' });
  }, [currentUser]);

  function handleSubmit(e) {
    e.preventDefault();

    handleUpdateUser(values);
  }

  return (
    <div className='profile'>
      <Header />
      <main className='profile__main'>
        <h1 className='profile__title'>{`Привет, ${name}`}!</h1>
        <form
          className='profile__form'
          noValidate
          onSubmit={handleSubmit}>
          <div className='profile__inputs'>
            <label className='profile__label'>
              <div className='profile__input-block'>
                <span className='profile__input-name'>Имя</span>
                <input
                  placeholder='Введите имя'
                  className={`profile__input ${!inputsValid.name ? 'profile__input_error' : ''}`}
                  type='text'
                  value={name || ''}
                  name='name'
                  required
                  onChange={handleChangeValidation}
                />
              </div>
              <span className='profile__error-message'>{errors.name}</span>
            </label>
            <label className='profile__label'>
              <div className='profile__input-block'>
                <span className='profile__input-name'>E-mail</span>
                <input
                  value={email || ''}
                  type='email'
                  name='email'
                  required
                  placeholder='Введите e-mail'
                  className={`profile__input ${!inputsValid.email ? 'profile__input_error' : ''}`}
                  onChange={handleChangeValidation}
                />
              </div>
              <span className='profile__error-message'>{errors.email}</span>
            </label>
          </div>
          <div className='profile__buttons'>
            <button
              type='submit'
              className={`profile__submit-button ${!isFormValid ? 'profile__submit-button_disabled' : ''}`}
              disabled={!isFormValid}>
              Редактировать
            </button>
            <Link
              to={'/'}
              className='profile__logout-button'
              onClick={handleLogout}>
              Выйти из аккаунта
            </Link>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Profile;
