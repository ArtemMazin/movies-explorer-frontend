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
            <Link
              className='portfolio__link'
              to={'https://github.com/ArtemMazin/how-to-learn'}
              target='blank'>
              Статичный сайт <span className='portfolio__arrow'>&#8599;</span>
            </Link>
          </li>
          <li className='portfolio__row'>
            <Link
              className='portfolio__link'
              to={'https://github.com/ArtemMazin/russian-travel'}
              target='blank'>
              Адаптивный сайт <span className='portfolio__arrow'>&#8599;</span>
            </Link>
          </li>
          <li className='portfolio__row'>
            <Link
              className='portfolio__link'
              to={'https://github.com/ArtemMazin/react-mesto-api-full-gha'}
              target='blank'>
              Одностраничное приложение <span className='portfolio__arrow'>&#8599;</span>
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Portfolio;
