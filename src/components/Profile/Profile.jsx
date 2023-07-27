import React, { useState } from 'react';
import './Profile.css';
import Header from '../Header/Header';

const Profile = () => {
  const [name, setName] = useState('Виталий');
  const [email, setEmail] = useState('pochta@yandex.ru');

  return (
    <>
      <Header />
      <main>
        <div className='profile'>
          <h1 className='profile__title'>Привет, Виталий!</h1>
          <form className='profile__form'>
            <div>
              <label className='profile__label'>
                <span className='profile__input-name'>Имя</span>
                <input
                  type='text'
                  placeholder='Введите имя'
                  className='profile__input'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
              <label className='profile__label'>
                <span className='profile__input-name'>E-mail</span>
                <input
                  type='text'
                  placeholder='Введите e-mail'
                  className='profile__input'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
            </div>

            <button
              type='submit'
              className='profile__submit-button'>
              Редактировать
            </button>
            <button
              type='button'
              className='profile__logout-button'>
              Выйти из аккаунта
            </button>
          </form>
        </div>
      </main>
    </>
  );
};

export default Profile;
