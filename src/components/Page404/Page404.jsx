import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Page404.css';

const Page404 = () => {
  const navigate = useNavigate();
  return (
    <main className='not-found'>
      <h1 className='not-found__title'>404</h1>
      <p className='not-found__text'>Страница не найдена</p>
      <button
        className='not-found__button'
        onClick={() => navigate(-1)}>
        Назад
      </button>
    </main>
  );
};

export default Page404;
