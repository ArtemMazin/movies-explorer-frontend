import React from 'react';
import './Promo.css';

const Promo = () => {
  return (
    <section className='promo'>
      <div className='promo__content'>
        <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
        <p className='promo__text'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        <button className='promo__button'>Узнать больше</button>
      </div>
      <div className='promo__img-wrap'>
        <div className='promo__img'></div>
      </div>
    </section>
  );
};

export default Promo;
