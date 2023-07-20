import React from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <nav>
        <ul className='portfolio__links'>
          <li className='portfolio__row'>
            <Link className='portfolio__link'>Статичный сайт</Link>
            <button className='portfolio__button'>&#8599;</button>
          </li>
          <li className='portfolio__row'>
            <Link className='portfolio__link'>Адаптивный сайт</Link>
            <button className='portfolio__button'>&#8599;</button>
          </li>
          <li className='portfolio__row'>
            <Link className='portfolio__link'>Одностраничное приложение</Link>
            <button className='portfolio__button'>&#8599;</button>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Portfolio;
