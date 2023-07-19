import React from 'react';
import { Link } from 'react-router-dom';
import './Promo.css';

const Promo = () => {
  return (
    <section className='promo'>
      <div>
        <div className='promo__description'>
          <h1 className='main-title'>Учебный проект студента факультета Веб-разработки.</h1>
          <p className='promo__text'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        </div>
        <Link>
          <button className='promo__button'>Узнать больше</button>
        </Link>
      </div>
      <div className='promo__img-wrap'>
        <div className='promo__img'></div>
      </div>
    </section>
  );
};

export default Promo;
