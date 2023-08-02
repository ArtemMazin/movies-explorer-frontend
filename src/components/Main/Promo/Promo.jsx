import React from 'react';
import './Promo.css';

const Promo = () => {
  return (
    <section className='promo'>
      <div>
        <div className='promo__description'>
          <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
          <p className='promo__text'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        </div>
        <a
          href='#about_project'
          className='promo__button'
          tabIndex={1}>
          Узнать больше
        </a>
      </div>
      <div className='promo__img-wrap'>
        <div className='promo__img'></div>
      </div>
    </section>
  );
};

export default Promo;
